const fs = require('fs');
const readline = require('readline');
const { promisify } = require('util');
const execute = require("./execute");

readline.Interface.prototype.question[promisify.custom] = function (prompt) {
    return new Promise(resolve =>
        readline.Interface.prototype.question.call(this, prompt, resolve),
    );
};
readline.Interface.prototype.questionAsync = promisify(
    readline.Interface.prototype.question,
);

const FILE_NAME = process.env.HOME + "/.bash_profile";

module.exports = async function writeVariables(variables) {

    let envs = await execute("bash -l ./listenv");

    let content = fs.readFileSync(FILE_NAME, { encoding: 'utf8', flag: 'r' });

    let lines = content.split("\n").filter(line => {
        let index = line.indexOf("export ");
        if (index == -1) {
            return false;
        }
        return true;
    });

    let alreadySet = envs.split("\n").reduce((acc, line) => {
        let parts = line.split("=");
        acc[parts[0]] = parts[1];
        return acc;
    }, {})

    let unset = variables.filter(variable => !alreadySet[variable.key]);
    console.log(unset)

    if (!unset.length) {
        console.log("All variables set")
        return true;
    }

    return new Promise(function (resolve, reject) {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });


        (async () => {
            for (let i = 0; i < unset.length; i++) {
                let entry = unset[i];
                let response = await rl.questionAsync(entry.key + " (MANDATORY - " + entry.description + ")\n> ");
                if (!response) {
                    i--;
                }
                entry.write = response;
            }
            rl.close();

            try {
                fs.appendFileSync(FILE_NAME, "\n" + unset.map(entry => ("export " + entry.key + "=" + entry.write)).join("\n"));
                console.log('The "data to append" was appended to file!');

                for (let i = 0; i < unset.length; i++) {
                    let entry = unset[i];
                    await execute("export " + entry.key + "=" + entry.write);
                };

            } catch (err) {
                /* Handle the error */
            }
            resolve(true);
        })();

    });
}
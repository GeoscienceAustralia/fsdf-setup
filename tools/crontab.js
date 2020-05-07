let config = require( "./config");
let execute = require("./execute");

async function loader(jobs) {
    let val = await execute("crontab -l 2>/dev/null");

    let additions = jobs.filter(entry => val.indexOf(entry.key) === -1).map(entry => entry.line).join("\n");

    let response = await execute('cat << EOF  | crontab -\n' +  val + additions + '\nEOF');
    return true;
}

module.exports = loader;
let exec = require('child_process').exec;
async function execute(command) {
    return new Promise(function (resolve, reject) {
        exec(command, function(error, stdout, stderr) { 
            if(error) {
                reject(error);
            } else {
                resolve(stdout); 
            }
        });
    });
};

module.exports = execute;
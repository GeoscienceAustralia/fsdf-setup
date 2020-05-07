let config = require( "./config");
let crontab = require("./crontab")
let variables = require("./variables");

async function loader() {
    console.log("Updating system variables for jobs");
    let response = await variables(config.envList);
    console.log("Finished updating .bash_profile");

    console.log("Updating crontab for jobs");
    response = await crontab(config.cronJobs);
    console.log("Finished updating crontab");
}

loader();
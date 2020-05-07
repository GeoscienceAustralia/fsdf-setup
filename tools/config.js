module.exports = {
    envList: [
        {
            name: "FME Username",
            description: "Used to call the token service to receive tokens for the calling the async service for download",
            key: "ESRI_USERNAME"
        },
        {
            name: "FME password",
            description: "Used to call the token service to receive tokens for the calling the async service for download",
            key: "ESRI_PASSWORD"
        },
        {
            name: "ELEVATION_SERVICE_KEY_VALUE",
            description: "Used to check on recaptcha, it will be something like token=55555xxxxxxyyyyyy44444",
            key: "ELEVATION_SERVICE_KEY_VALUE"
        },
        {
            name: "ELEVATION_RECAPTCHA_PRIVATE_KEY",
            description: "Used to check on recaptcha server side, it will be something like 1111234453g34gdfHFFDGFGF5444",
            key: "ELEVATION_RECAPTCHA_PRIVATE_KEY"
        },
    
        {
            name: "PLACENAMES_DB_HOST",
            description: "The gazetteer database host name",
            key: "PLACENAMES_DB_HOST"
        },
        {
            name: "PLACENAMES_DB_PORT",
            description: "The port that the database listens on",
            key: "PLACENAMES_DB_PORT"
        },
        {
            name: "PLACENAMES_DB_DATABASE",
            description: "The placenames gazetteer database name",
            key: "PLACENAMES_DB_DATABASE"
        },
        {
            name: "PLACENAMES_DB_USER",
            description: "DB username to download from Postgres DB",
            key: "PLACENAMES_DB_USER"
        },
        {
            name: "PLACENAMES_DB_PASSWORD",
            description: "DB password to match DB username to connect to database",
            key: "PLACENAMES_DB_PASSWORD"   
        },
        {
            name: "PLACENAMES_AWS_S3_BUCKET",
            description: "The S3 bucket name to upload Gazetteer data to",
            key: "PLACENAMES_AWS_S3_BUCKET"
        },
        {
            name: "PLACENAMES_AWS_ACCESS_KEY_ID",
            description: "Placenames AWS access key id, part of the convoluted handshaking to allow logging in to uploaders",
            key: "PLACENAMES_AWS_ACCESS_KEY_ID"
        },
        {
            name: "PLACENAMES_AWS_SECRET_ACCESS_KEY",
            description: "Placenames AWS secret access, part of the convoluted handshaking to allow logging in to uploaders",
            key: "PLACENAMES_AWS_SECRET_ACCESS_KEY"
        },
        {
            name: "PLACENAMES_AWS_COGNITO_LOGIN_URL",
            description: "Logon URL for cognito, has embedded client id and login redirect back to application",
            key: "PLACENAMES_AWS_COGNITO_LOGIN_URL"
        },
        {
            name: "PLACENAMES_AWS_COGNITO_JWKS_URL",
            description: "JWKS URL needed as part of the convoluted logon process",
            key: "PLACENAMES_AWS_COGNITO_JWKS_URL"
        },
        {
            name: "GOOGLE_KEY",
            description: "Used to allow access and billing to google services. It's provided by GA and requires key=45rge453tete format",
            key: "GOOGLE_KEY"
        },
        {
            name: "DUMMY_KEY",
            description: "Used to allow access and billing to google services. It's provided by GA and requires key=45rge453tete format",
            key: "DUMMY_KEY"
        },
        {
            name: "DUMMY2_KEY",
            description: "Used to allow access and billing to google services. It's provided by GA and requires key=45rge453tete format",
            key: "DUMMY2_KEY"
        }
    ],

    cronJobs: [
        {
            key: "/gazetteer/deploy/schedule_provisioning",
            line: "0 1,5,14,23 * * * /bin/bash $HOME/gazetteer/deploy/schedule_provisioning"
        },
        {
            key: "/gazetteer/deploy/clean_deploy",
            line: "0 13 * * * /bin/bash $HOME/gazetteer/deploy/clean_deploy"
        },
        {
            key: "/elvis-placenames/deployment/build_reference_data",
            line: "15 13 * * * /bin/bash $HOME/elvis-placenames/deployment/build_reference_data"
        },
        {
            key: "/fsdf-elvis/code-deploy/refreshtoken",
            line: "0 3,9,15,21 * * 0 /bin/bash $HOME/fsdf-elvis/code-deploy/refreshtoken"
        }
    ]
}
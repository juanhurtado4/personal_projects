const https = require('https');

function printError(error) {
    console.log(error.message)
}

function printMessage(username, badgeCount, point) {
    const message = `${username} has ${badgeCount} total badge(s) and ${point} points in JavaScript`;
    console.log(message)
}

function getProfile(username) {
    try {
        const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
            let body = "";

            response.on('data', data => {
                body += data.toString();
            });

            response.on('end', () => {
                try {
                    const profile = JSON.parse(body);
                    // console.log(typeof profile);
                    // console.log(body);
                    printMessage(username, profile.badges.length, profile.points.Javacript);
                } catch (error) {
                    printError(error)
                }
            });

            
        });
        request.on('error', error => { 
            console.error(`Problem with request: ${error.message}`)
        });
    } catch (error) {
        printError(error)
    }
}

const users = process.argv.slice(2);

users.forEach(getProfile);
const https = require('https');

function printMessage(username, badgeCount, point) {
    const message = `${username} has ${badgeCount} total badge(s) and ${point} points in JavaScript`;
    console.log(message)
}

function getProfile(username) {
    const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
        let body = "";

        response.on('data', data => {
            body += data.toString();
        });

        response.on('end', () => {
            const profile = JSON.parse(body);
            // console.log(typeof profile);
            // console.log(body);
            printMessage(username, profile.badges.length, profile.points.Javacript);
        });

    });
}

const users = process.argv.slice(2);

users.forEach(getProfile);
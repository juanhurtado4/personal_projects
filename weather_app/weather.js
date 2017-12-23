const https = require('https');
const api = require('./api.json');

// Print out temp details
// Print out error message

function get(query) {
    const request = https.get(`https://api.wunderground.com/api/${api.key}/geolookup/conditions/q/${query}.json`, response => {
        let body = "";
        // Read the data
        response.on('data', chunk => {
            body += chunk;
        });
        response.on('end', () => {
            // console.log(body);
            let parseBody = JSON.parse(body)
            let cityName = parseBody.location.city;
            let currentTemp = parseBody.current_observation.temp_f;

            console.log(`Current temperature in ${cityName} is ${currentTemp}`)
        //Parse data
            //Print the data
        });
    });
}
 
module.exports.get = get;

//TODO: Handle any errors
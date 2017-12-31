let request = require('request');
request('https://www.google.com', (error, response, body) => {
    if (!error && response.statusCode === 200) {
        console.log(body);
    } else{
        console.error(error);
    }
    
})
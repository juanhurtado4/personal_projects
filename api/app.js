let request = require('request');
let express = require('express');
let app = express();
app.set('view engine', 'ejs');

app.get('/results', function(req, res){
    
    request('http://www.omdbapi.com/?apikey=88468f0b&s=california', 
            function(error, response, body){
                if (!error && response.statusCode == 200){
                    res.send(body)
                } else {
                    console.error(error)
                }
    })
})

  
app.listen('3000', () => console.log('Listening on port 3000'))
let request = require('request');
let express = require('express');
let app = express();

app.set('view engine', 'ejs');

app.get('/home', function(req, res){
    'pass'
})




app.listen('3000', () => console.log('Listening on port 3000'))
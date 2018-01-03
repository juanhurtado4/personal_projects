let bodyPser = require('body-parser');
let mongoose = require('mongoose');
let express = require('express');
let app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
mongoose.connect('mongodb://localhost/restful_blog_app');
app.use(bodyPser.urlencoded({extended: true}));

app.listen('3000', () => {
    console.log('Server listening on port 3000')
})
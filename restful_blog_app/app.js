let bodyPser = require('body-parser');
let mongoose = require('mongoose');
let express = require('express');
let app = express();

// App Config
app.set('view engine', 'ejs');
app.use(express.static('public'));
mongoose.connect('mongodb://localhost/restful_blog_app');
app.use(bodyPser.urlencoded({extended: true}));

// Mongoose Config
let blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
})

let Blog = mongoose.model('Blog', blogSchema);

// Restful Routes
app.get('/blogs', function(req, res){
    Blog.find({}, function(err, blogs){
        if (err) {
            console.log('Error happeneded');
        } else {
            res.render('index', {blogs: blogs});
        }
    })
})

app.get('/', function(req, res){
    res.redirect('/blogs')
})

app.listen('3000', () => {
    console.log('Server listening on port 3000')
})
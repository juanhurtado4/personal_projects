let express = require('express');
let app = express();

// Tells express where to look for stylesheet
app.use(express.static('public'))

// Tells express that all files extensions will be .ejs
app.set('view engine', 'ejs')


function removeUnderscore(string){
    
    return string.replace('_', ' ').toLowerCase()
}

function toTitleCase(string){
    let newString = string.split(' ')
    newString = newString.map(function(w) {
        return w[0].toUpperCase() + w.slice(1).toLowerCase()
    })

    return newString.join(' ')
}

let test = 'juan hurtado'

let title = toTitleCase(test)

app.get('/', function(req, res){
    let pageTitle = 'Home'
    res.render('home', {'pageTitle': pageTitle})
});

app.get('/posts', function(req, res){
    let pageTitle = 'Posts'
    let posts = [
        {title: 'Harry Potter', author: 'J.K. Rowlin'},
        {title: 'Wild', author: 'Cherryl Strayed'},
        {title: 'Game of Thrones', author: 'George R.R. Martin'}
    ]
    
    res.render('post', {posts: posts, 'pageTitle': pageTitle})
});

app.get('/favorite_book/:bookName', function(req, res){
    let pageTitle = 'Favorite Book'
    let bookName = req.params.bookName;
    bookName = removeUnderscore(bookName);
    bookName = toTitleCase(bookName);

    res.render('favorite_book', {'bookName': bookName, 'pageTitle': pageTitle});
});


app.listen('3000', () => {console.log('Listening on port 3000')});
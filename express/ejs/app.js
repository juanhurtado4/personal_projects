let express = require('express');
let app = express();

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
    res.render('home.ejs')
});

app.get('/posts', function(req, res){
    
    let posts = [
        {title: 'Harry Potter', author: 'J.K. Rowlin'},
        {title: 'Wild', author: 'Cherryl Strayed'},
        {title: 'Game of Thrones', author: 'George R.R. Martin'}
    ]
    
    res.render('post.ejs', {posts: posts})
});

app.get('/favorite_book/:bookName', function(req, res){
    let bookName = req.params.bookName;
    bookName = removeUnderscore(bookName);
    bookName = toTitleCase(bookName);

    res.render('favorite_book.ejs', {'bookName':bookName});
});


app.listen('3000', () => {console.log('Listening on port 3000')});
let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

let todos = ['Buy screen cover', 'Finish JS project']

app.post('/add_todos', function(req, res){
    let newTodo = req.body.todo;
    todos.push(newTodo)
    res.redirect('/todos');
})

app.get('/todos', function(req, res){
    res.render('todos', {todos: todos});
})

app.listen('3000', function() {console.log('Listening on port 3000')});
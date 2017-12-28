let express = require('express');

let app = express();

app.get('/', function(req, res) {
    res.send('Home page hello');
});

app.get('/bye', function(req, res) {
    res.send('Goodbye!!');
});

app.get('/nba/player/:some_player_name', function(req, res) {
    let playerName = req.params.some_player_name;
    playerName = playerName.replace('_', ' ')
    res.send(`Welcome to ${playerName}'s page`)
});

app.listen(3000, () => {
    console.log('Serving on port 3000')
});
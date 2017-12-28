let express = require('express');

let app = express();

app.get('/', function(req, res){
    res.send('Hi there, welcome to my assignment!');
});

app.get('/mma/:fighter', function(req, res){

    function getName(fighterName){
        let fighter = req.params.fighter;
        fighter = fighter.replace('_', ' ').toLowerCase();
        return fighter
    }

    let fighter = getName();

    switch (fighter) {
        case 'jon jones':
            res.send('Jon Jones is undefeated');

        case 'anderson silva':
            res.send('Anderson Silva was once known as the greatest of all time');

        case 'gsp':
            res.send('gsp is the current greatest of all time');
        
        case 'ronaldo souza':
            res.send('Ronaldo Souza is a beast on the ground');
            
        case 'bj penn':
            res.send('BJ Penn was once a two time champion');

        default: res.send('Please enter a valid fighter. (Jon Jones, Anderson Silva, GSP, BJ Penn)')
    }
});

app.get('/repeat/hello/:numberOfTimes', function(req, res){
    
    let numberOfTimes = req.params.numberOfTimes;
    
    for (let i = 0; i < numberOfTimes; i++){
        res.send('Hello');
    }
    
});

app.get('/repeat/:message/:numberOfTimes', function(req, res){

    
    function removeTrailingSpace(stringToChange) {
        let blank_space_index = stringToChange.length - 1;
        stringToChange = stringToChange.slice(0, blank_space_index);
        return stringToChange
    }

    let userString = ''
    
    let numberOfTimes = Number(req.params.numberOfTimes);
    let messageToPrint = req.params.message;
    
    for (let i = 0; i < numberOfTimes; i++) {
        userString += messageToPrint + ' '
    }
    userString = removeTrailingSpace(userString);

    res.send(userString);
});

app.get('*', function(req, res){
    res.send('Sorry page not found....What are you doing with your life?');
});


app.listen('3000', () => console.log('Listening on port 3000'))

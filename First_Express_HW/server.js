const express = require('express');
const app = express();

const port = 3000;

app.listen(port, () => {
    console.log('app is running on port: ', port);
})
//Greetings
app.get('/greeting/:name', (req, res) => {
    const name = req.params.name;
    res.send('Hello ' + name + ' welcome to my humble webpage')
})

//Tip Calculator
const response = ["It is certain", 
                 "It is decidedly so", 
                 "Without a doubt",
                 "Yes definitely", 
                 "You may rely on it", 
                 "As I see it yes", 
                 "Most likely", 
                 "Outlook good", 
                 "Yes", 
                 "Signs point to yes", 
                 "Reply hazy try again", 
                 "Ask again later", 
                 "Better not tell you now", 
                 "Cannot predict now", 
                 "Concentrate and ask again", 
                 "Don't count on it", 
                 "My reply is no", 
                 "My sources say no", 
                 "Outlook not so good", 
                 "Very doubtful"]

app.get('/magic/:question', (req, res) => {
   
    const question = req.params.question;
    const index = Math.round(Math.random()*(response.length-1));
    const answer = response[index];
    res.send(`<h1>${question}</h1>
            <h2>${answer}</h2>`)
})
//Magic 8 Ball
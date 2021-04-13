const express = require('express');
const app = express();

const port = 3000;

app.listen(port, () => {
    console.log('app is running on port: ', port);
})

app.get('/:number_of_bottles', (req, res) => {
    let bottles = Number(req.params.number_of_bottles);
    let bottleCount = bottles;
    let link = bottles - 1;
    if(bottles >= 2){
    res.send(`<h1>${bottleCount} Bottles of wine on the wall</h1> 
     <a href = "${link}">Take one down, pass it around!</a>`)
    }
    else if(bottles > 0){
        res.send(`<h1>${bottleCount} Bottle of wine on the wall</h1> 
         <a href = "${link}">Take one down, pass it around!</a>`)
        }
    else{
    let reset = bottleCount + 10;
    res.send(`<h1>${bottleCount} Bottles of wine left on the wall</h1> 
     <a href = "${reset}">Click here to replenish the wall with 10 bottles of wine!</a>`)
    }
})


//Up to lesson 144
const express = require('express');

const app = express();

function delay(duration) {
    const startTime = Date.now();
    while(Date.now() - startTime < duration) {
        //event loop is blocked.
    }
};

app.get('/', (req, res) => {
    res.send(`Performance example ${process.pid}`);
});

console.log('Running server.js');
app.get('/timer', (req, res) => {
    delay(2000);//time in ms.
    res.send(`Beep Beep motherfucker! ${process.pid}`);
});

console.log('Running server.js');
console.log('Worker started.');
app.listen(3000);
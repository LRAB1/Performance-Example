//Up to lesson 143
const express = require('express');
const cluster = require('cluster');
const os = require('os');

const app = express();

function delay(duration) {
    const startTime = Date.now();
    while(Date.now() - startTime < duration) {
        //event loop is blocked.
    }
};

app.get('/', (req, res) => {
/*     JSON.stringify({});
    JSON.parse("{}"); */
    //[5,1,2,3,4].sort also blocking
    res.send(`Performance example ${process.pid}`);
});

console.log('Running server.js');
app.get('/timer', (req, res) => {
    delay(5000);//time in ms.
    res.send(`Ding Ding Ding motherfucker! ${process.pid}`);
});

if (cluster.isMaster) {
    console.log('Master has been started.');
    const NUM_WORKERS = os.cpus().length;
    for (let i = 0; i< NUM_WORKERS; i++) {
        cluster.fork();
    };
} else {
    console.log('Worker started.');
    app.listen(3000);
};
const express = require('express');

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
    res.send('Performance example');
});

app.get('/timer', (req, res) => {
    delay(1500);//time in ms.
    res.send('Ding Ding Ding motherfucker!');
});

app.listen(3000);
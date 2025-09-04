const express = require('express');
const app = express();
const PORT = 3000;

let numberOfRequests = 0;

function calculateRequests(req, res, next) {
    numberOfRequests++;
    console.log(numberOfRequests);
    next();
}

app.use(express.json());

app.post('/health-checkup', calculateRequests, function(req, res) {
    res.json({
        msg: "health check is okay"
    });
})

app.listen(PORT);
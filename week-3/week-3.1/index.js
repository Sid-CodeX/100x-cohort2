const express = require('express');
const app = express();
const PORT = 3000;

function userMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;

    if(username != "sidharth" || password != "password") {
        res.status(403).json({
            msg: "User doesnt exist!"
        });
        //return;
    }
    else {
        next();
    }
}
function kidneyMiddleware(req, res, next) {
    const kidneyId = req.query.kidneyId;

    if(kidneyId != 1 && kidneyId != 2) {
        res.status(411).json({
            msg: "Invalid kidneyId"
        });
        //return;
    }
    else {
        next();
    }
}

app.get('/health-checkup', userMiddleware, kidneyMiddleware, function(req, res) {    
    res.status(200).json({
        msg: "Kidney is healthy"
    });
})

app.listen(PORT);
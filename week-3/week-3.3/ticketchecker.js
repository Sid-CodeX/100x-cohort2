const express = require('express');
const app = express();

app.use(express.json());

// function that returns a boolean if the age of the preson is more than 14
function isOldEnough(age) {
    return age > 14;
}

function isOldEnoughMiddleware(req, res, next) {
    const age = req.query.age;
    if(age >= 14) {
        next();
    }
    else {
        res.json({
            msg: "Sorry you are not age yet"
        });
    };
} 

// you can also use this middleware for all the routes 
//app.use(isOldEnoughMiddleware);

app.get("/ride1", isOldEnoughMiddleware, function(req, res) {
    res.json({
        msg: "You have successfully riden the ride 1"
    });
});

app.get("/ride2", isOldEnoughMiddleware, function(req, res) {
    res.json({
        msg: "You have successfully riden the ride 1"
    });
});

app.listen(3000);
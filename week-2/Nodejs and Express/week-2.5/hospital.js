const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());

var users = [{
    name: "John",
    kidneys: [{
        healthy: false
    }, {
        healthy: true
    }]
}] 

app.get('/', function(req, res) {

    const johnKidney = users[0].kidneys;
    const count = johnKidney.length;
    let numHealthy = 0;
    for(let i = 0; i < users[0].kidneys.length; i++) {
        if(johnKidney[i].healthy == true) {
            numHealthy++;
        }
    }
    console.log(users[0].name + " has " + numHealthy + " healthy kidneys out of " + count);
    res.json({
        name: users[0].name,
        numOfKidneys: count,
        numOfHealthy: numHealthy,
        numUnhealthy: count - numHealthy
    });    
})

app.post('/', function(req, res) {
    const isHealthy = req.body.isHealthy;
     users[0].kidneys.push({
        healthy: isHealthy
     });
     res.json({
        message: "succesfully added"
     });
})

app.put('/', function(req, res) {
    for(let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({
        message: "succesfully updated every kidney to healthy"
    });
})

app.delete('/', function(req, res) {
    const newKidneys = [];
    let atleastOneUnhealthy = false;
    for(let i = 0; i < users[0].kidneys.length; i++) {
        if(users[0].kidneys[i].healthy == true) {
            newKidneys.push(users[0].kidneys[i]);
        }
        else {
            atleastOneUnhealthy = true;
        }
    }
    if(!atleastOneUnhealthy) {
        res.status(411).json({
            message: "No unhealthy kidneys"
        });
    }else{
        users[0].kidneys = newKidneys;
        res.json({  
            message: "successfully removed unhealthy kidneys"
        });
    }
})

app.listen(PORT);
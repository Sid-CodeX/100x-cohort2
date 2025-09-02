const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
// using body parser middleware to parse JSON request bodies
app.use(bodyParser.json());

app.post('/', function(req, res) {
    console.log(req.body["name"]);
    res.json({
        name: "Sid"
    });
})

app.listen(port);
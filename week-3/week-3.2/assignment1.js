const express = require('express');
const jwt = require('jsonwebtoken');
//const { use } = require('react');
const jwtPassword = "123456";

const app = express();
app.use(express.json());

const ALL_USERS = [
    {
        username: "sid@gmail.com",
        password: "123",
        name: "Sidharth"
    },
    {
        username: "harkirat@gmail.com",
        password: "123",
        name: "harkirat singh"
    },
    {
        username: "abcd@gmail.com",
        password: "12321",
        name: "unknown"
    },
];

function userExists(username, password) {
    // write logic to return true or false if this user exists
    // in ALL_USERS array
    let userExists = false;
    for(let i = 0; i < ALL_USERS.length; i++) {
        if(ALL_USERS[i].username == username && ALL_USERS[i].password == password) {
            userExists = true;
            break;
        }
    }
    return userExists;
}

app.post('/signin', function(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username, password)) {
        return res.status(403).json({
            msg: "User doesnt exist in our memory db"
        });
    }

    var token = jwt.sign({username: username}, jwtPassword);
    return res.json({
        token,
    });
});

app.get('/users', function(req, res) {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        // return a list of users other than this username
        return res.json({
            users: ALL_USERS
        })
    }
    catch{
        return res.status(403).json({
            msg: "Invalid token",
        });
    }
});

app.listen(3000);
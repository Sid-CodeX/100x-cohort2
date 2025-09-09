const mongoose = require('mongoose');
const express = require('express');

const { email } = require('zod');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://sidhusaketham_db_user:v9F2aVLShYM7S0NE@cohort100x.dskwvtw.mongodb.net/userappnew')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));  

const User = mongoose.model('Users', {name: String, email: String, password: String});

app.post('/signup' , async function(req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    
    const existingUser = await User.findOne({email: email});
    if(existingUser) {
        return res.status(400).json({
            msg: "Username already exists"
        });
    }
    const user = new User({
        name: name, 
        email: email, 
        password: password
    });
    user.save();
    return res.json({
        msg: "User signed up successfully"
    });
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
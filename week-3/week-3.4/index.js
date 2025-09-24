const jwt = require('jsonwebtoken');
const express = require('express');

const app = express();

// decode, verify, generate
const value = {
    name: "Sidharth",
    accountNumber: "1234567890"
}

// jwt
const token = jwt.generate(value, "secretpassword");

// this token hass been generated using this secret, 
// and hence this token can be verified using this secret 
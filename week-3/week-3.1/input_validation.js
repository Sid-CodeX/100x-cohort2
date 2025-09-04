const express = require('express');
const zod = require('zod');
const app = express();
const PORT = 3000;

const schema = zod.array(zod.number());

const schema2 = zod.object({
    email: zod.string(),
    password: zod.string(),
    country: zod.literal("IN").or(zod.literal("US")),
    kidneys: zod.array(zod.number())
})

const schema3 = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8)
})

app.use(express.json());

app.post('/health-checkup', function(req, res) {
    const kidneys = req.body.kidneys;
    //const kidneyLength = kidneys.length;
    const response = schema.safeParse(kidneys);
    if(!response.success) {
        res.status(411).json({
            msg: "Invalid input"
        });
    }
    else {
        res.json({
            msg: response
        });
    }
});

// Global catches

app.use(function(err, req, res, next) {
    res.json({
        msg: "Sorry something is up with our server"
    });
})
-

app.listen(PORT);
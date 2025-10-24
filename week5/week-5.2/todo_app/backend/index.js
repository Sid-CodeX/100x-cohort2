
// Write basic express boilerplate code,
// with express.json() middleware,
const express = require('express');
const cors = require('cors');
const { createTodo, updateTodo } = require('./type'); 
const { todo } = require('./db');  
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

// Write a POST /todos endpoint to create a todo
app.post('/todos', async function(req, res) {
    const createPayLoad = req.body;
    const parsedPayLoad = createTodo.safeParse(createPayLoad);
    if(!parsedPayLoad.success) {
        res.status(400).json({
            msg: "You sent the wrong inputs",
        });
        return;
    }

    // Put it in mongodb
    await todo.create({
        title: createPayLoad.title,
        description: createPayLoad.description,
        completed: false
    })

    res.json({
        msg: "Todo created"
    })
}); 

// Write a GET /todos endpoint to get all todos
app.get('/todos', async function(req, res) {
    const todos = await todo.find({});
    
    res.json({
        todos
    });
});

// Write a PUT /completed endpoint to mark a todo as completed
app.put('/completed', async function(req, res) {
    const updatePayLoad = req.body;
    const parsedPayLoad =updateTodo.safeParse(updatePayLoad);
    if(!parsedPayLoad.success) {
        res.status(400).json({
            msg: "You sent the wrong inputs",
        });
        return;
    }
    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })
    
    res.json({
        msg: "Todo marked as completed"
    });
});

app.listen(PORT);
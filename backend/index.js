const express = require('express');
const app = express();
// importing the types.js
// import { createToDo, updateToDo } from './types';
// import {todo} from './db';
const {createToDo, updateToDo} = require("./types");
const { todo } = require('./db');
app.use(express.json()); // middleware 

// we better validate that the user s sending the correct information 
/*
body{
title: string 
description: string 
}

lets do the validation using ZOD
*/


app.post("/todo", async function(req, res){
    const createPayLoad = req.body;
    const parsePayLoad = createToDo.safeParse(createPayLoad);
    if(! parsePayLoad.success){
        res.status(411).json({
            msg: "You have sent the wrong input"
        })
        return;
    }
    // put it in the mongodb 

    await todo.create({
        title: createPayLoad.title,
        description: createPayLoad.description,
        completed: false,
    })

    res.json({
        msg: "created todo successfully"
    })
})

app.get("/todos", async function(req, res){
    const todos = await todo.find({})
    res.json({
        todos
    })
})

app.put("/completed/:id", async function(req, res) {
    const updatePayLoad = req.body;
    const parsePayLoad = updateToDo.safeParse(updatePayLoad);
    if (!parsePayLoad.success) {
        return res.status(411).json({
            msg: "You have sent the wrong input"
        });
    }

    try {
        const updatedTodo = await todo.findByIdAndUpdate(req.params.id, {
            completed: true
        }, { new: true }); // { new: true } returns the updated document

        if (!updatedTodo) {
            return res.status(404).json({ msg: "Todo not found" });
        }

        res.json({
            msg: "Todo marked as completed",
            todo: updatedTodo // Optional: return the updated todo object
        });
    } catch (error) {
        res.status(500).json({ msg: "Server error", error });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
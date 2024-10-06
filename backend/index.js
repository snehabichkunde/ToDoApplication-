const express = require('express');
const app = express();
// importing the types.js
import { createToDo, updateToDo } from './types';
app.use(express.json()); // middleware 

// we better validate that the user s sending the correct information 
/*
body{
title: string 
description: string 
}

lets do the validation using ZOD
*/


app.post("/todo", function(req, res){
    const createPayLoad = req.body;
    const parsePayLoad = createToDo.safeParse(createPayLoad);
    if(! parsePayLoad.success){
        res.status(411).json({
            msg: "You have sent the wrong input"
        })
        return;
    }
    // put it in the mongodb 
})

app.get("/todos", function(req, res){

})

app.put("/completed", function(req, res){
    const updatePayLoad = req.body;
    const parsePayLoad = updateToDo.safeParse(createPayLoad);
    if(! parsePayLoad.success){
        res.status(411).json({
            msg: "You have sent the wrong input"
        })
        return;
    }
})
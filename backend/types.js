const zod = require("zod");
/*
Schema {
title: string
description: string 
}
{
id:string  //when it is completed 
}
*/

const createToDo = zod.object({
    title: zod.string(),
    description: zod.string()
})

const updateToDo = zod.object({
    id: zod.string()
})

// to export this 
module.exports = {
    createToDo: createToDo,
    updateToDo: updateToDo
}
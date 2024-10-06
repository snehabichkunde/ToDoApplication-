const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://bichkundesneha:B4N7l1cZ8Ywo6Lod@cluster0.igjna.mongodb.net/todos")


// lets create the schema 
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module,exports = {
    todo: todo
}
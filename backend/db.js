const mongoose = require("mongoose");

// Connect to MongoDB with error handling
mongoose.connect("mongodb+srv://bichkundesneha:B4N7l1cZ8Ywo6Lod@cluster0.igjna.mongodb.net/todos")
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch(err => {
    console.error("MongoDB connection error:", err);
  });

// Define the schema
const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  completed: { type: Boolean, default: false }
});

// Create the model
const todo = mongoose.model('Todo', todoSchema);

module.exports = {
  todo
};

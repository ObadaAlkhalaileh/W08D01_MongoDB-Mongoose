const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    task: { type: String, required: true },
    description: String,
    deadline: { type: Date, required: true },
    isCompleted: { type: Boolean, required: true },
    priority: String
});

module.exports = mongoose.model("Todo", todoSchema);
const express = require("express");
//todo model use(connected to todo schema in schema.js)
const todoModel = require("./schema");

const db = require("./db");

const app = express();

app.use(express.json());

app.get("/todos", (req, res) => {});

//PRACTICE 1
app.post("/create/todo", (req, res) => {
    //assigning request inputs to variables
    const { task, description, deadline, isCompleted, priority } = req.body;
    //same as this way down here
    // const task = req.body.task;
    // const description = req.body.description;
    // const deadline = req.body.deadline;
    // const isCompleted = req.body.isCompleted;
    // const priority = req.body.priority;

    //creating the data element that will be stored in DB
    const todo = new todoModel({ task, description, deadline, isCompleted, priority });
    //same as this way down here
    // const todo = new todoModel = {
    //     task:task,
    //     description:description,
    //     deadline:deadline,
    //     isCompleted:isCompleted,
    //     priority:priority
    // };
    todo
        .save()
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.send(err);
        });
});

app.put("/update/todo", (req, res) => {});
app.delete("/delete/todo", (req, res) => {});

const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
const express = require("express");
//todo model use(connected to todo schema in schema.js)
const todoModel = require("./schema");

const db = require("./db");

const app = express();

app.use(express.json());

// practice 6
app.delete("/delete/todo", (req, res) => {
    todoModel.deleteMany({ isCompleted: true }, (err, resp) => {
        if (err) { res.send(err) };
        if (resp) { //kept waiting in postman without this condition
            res.status(200);
            res.send("completed tasks deleted");
        };
    });
});

//PRACTICE 5
app.put("/update/todo", (req, res) => {});

//PRACTICE 4
app.get("/todos/completed", (req, res) => {
    // const searchCondition = req.params.completed (no need)
    todoModel.find({ isCompleted: true })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.send(err);
        });
});

//PRACTICE 3
app.get("/todos", (req, res) => {
    todoModel.find({})
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.send(err);
        });
});

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


const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
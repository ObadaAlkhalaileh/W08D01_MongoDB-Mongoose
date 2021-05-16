const mongoose = require("mongoose");

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
};

// connecting mongoose
mongoose.connect("mongodb://localhost:27017/My_DB", options).then(
    () => {
        console.log("My DB is Ready To Use");
    },
    (err) => {
        console.log(err);
    }
);
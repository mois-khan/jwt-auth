const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/authRoutes");

const app = express();

// connecting database
mongoose.connect("mongodb://127.0.0.1:27017/jwt-auth")
.then(() => console.log("MongoDB Connected.."))
.catch((err) => console.log(err))

// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
    res.send("Hello!!")
});

app.use(router);

app.listen(3000, () => {console.log("App is running...")});
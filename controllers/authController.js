const User = require("../model/userModel");

function signup_get(req, res) {
    res.send("Sign Up Page..")
};

async function signup_post(req, res) {
    const { email, password } = req.body;
    try {
       const newUser = await User.create({email, password})
        res.status(201).json(newUser)
    }
    catch (err) {
        console.log(err)
        res.status(400).send("Cannot create new user..")
    }
};

function login_get(req, res) {
    res.send("Log in Page..")
};

function login_post(req, res) {
    res.json(req.body)
};

module.exports = {
    signup_get,
    signup_post,
    login_get,
    login_post
}
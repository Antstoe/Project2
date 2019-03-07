// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;
app.use(express.urlencoded({ extended: true }));

//Get for index homepage
app.get("/", function (req, res) {
    // res.sendFile(path.join(__dirname, "home.html"));
    res.sendFile('index.html', { root: "./views/"});
});
app.get("/blog", function (req, res) {
    // res.sendFile(path.join(__dirname, "home.html"));
    res.sendFile('blog-full.html', { root: "./views/"});
});
app.get("/contacts", function (req, res) {
    // res.sendFile(path.join(__dirname, "home.html"));
    res.sendFile('contact4.html', { root: "./views/"});
});
app.get("/shop", function (req, res) {
    // res.sendFile(path.join(__dirname, "home.html"));
    res.sendFile('shop.html', { root: "./views/"});
});
app.get("/verified", function (req, res) {
    // res.sendFile(path.join(__dirname, "home.html"));
    res.sendFile('21.html', { root: "./views/"});
});
//Get for Survey
app.get("/survey", function (req, res) {
    // res.sendFile(path.join(__dirname, "home.html"));
    res.sendFile('survey.html', { root: "./views/"});
});



module.exports = app;

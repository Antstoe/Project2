// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;
app.use(express.urlencoded({ extended: true }));
// HTML ROUTES
//Get for Survey
app.get("/", function (req, res) {
    // res.sendFile(path.join(__dirname, "home.html"));
    res.sendFile('survey.html', { root: "./views/"});
});

//Get for Index
// Route for Index
app.use('./views/index', function(req, res){
	res.sendFile(path.join(__dirname + './views/index.html'));
	});

// app.get("/survey", function (req, res) {
//     res.sendFile('survey.html', { root: "./app/public/"});
// });

module.exports = app;

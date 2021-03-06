// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.port || 8081;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//html routing
var htmlroutes = require("./routes/html-routes");
app.use('/',htmlroutes);

//api routing
var apiroutes = require("./routes/api-routes");
app.use('/',apiroutes); 

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORTS " + PORT);
});
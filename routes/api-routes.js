// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;
//mysql
var weed = require("../models/weed");
var wine = require("../models/wine")
app.use(express.urlencoded({ extended: true }));
// API ROUTES

app.get("/api/survey", function (req, res) {
    console.log(res);
    // return res.json(friends);
});
app.post("/api/survey", function (req, res) {
    var surveyInput = req.body;
    console.log(surveyInput);
    var surveyOutput;
    var effect = surveyInput.results[0];
    var winetype = surveyInput.results[1];
    var sweetness = surveyInput.results[2];
    var acidity = surveyInput.results[3];
    var body = surveyInput.results[4];
    var flavor = surveyInput.results[5];

    var weedConditions =[`effects = '${effect}'`,`winetype = '${winetype}'`,`taste = '${flavor}'`];
    var wineConditions =[`type  = '${winetype}'`,`sweetness = '${sweetness}'`, `acidity = '${acidity}'`,`body = '${body}'`]

    weed.search(weedConditions,function(weeds){
        console.log(weeds);
        wine.search(wineConditions,function(wines){
            console.log(wine);
            surveyOutput = {
                wine : wines,
                weed : weeds
            }
            return res.json(surveyOutput);

        });

    });

});

module.exports = app;

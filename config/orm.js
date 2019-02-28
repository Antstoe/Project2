// methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
    all: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    createWeed: function (name, taste, effects, cb) {
        var queryString = "INSERT INTO weed (name,taste,effects,image_link) VALUES (?,?,?,?)";

        console.log(queryString);

        connection.query(queryString, [name, taste, effects], function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    createWine: function () {
        var queryString = "INSERT INTO wine (type,name,style,taste,image_link) VALUES (?,?,?,?,?)";
        // console.log(queryString);
        connection.query(queryString, [type,name,style,taste,image_link], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

// Export the orm object for the model (burger.js)
module.exports = orm;

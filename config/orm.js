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
    createWeed: function (name, taste, effects, winetype, image, cb) {
        var queryString = "INSERT INTO weed (name,taste,effects,winetype,image) VALUES (?,?,?,?,?)";

        console.log(queryString);

        connection.query(queryString, [name, taste, effects, winetype, image], function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    createWine: function (type, name, style, taste, image_link, cb) {
        var queryString = "INSERT INTO wine (type,name,style,taste,image_link) VALUES (?,?,?,?,?)";
        // console.log(queryString);
        connection.query(queryString, [type, name, style, taste, image_link], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    search: function (table, conditions, cb) {
        var queryString = "SELECT * FROM ";
        queryString += table;
        queryString += " WHERE"
        //insert conditions
        for (var i = 0; i < conditions.length; i++) {
            queryString += " " + conditions[i];
            //check if last item in array, if not add AND
            if (!(i +1 == conditions.length)) {
                queryString += " AND";
            }
        }
        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};
function test() {
    var conditions = ["type = 'Sparkling'","body = 'light'"];
    orm.search("wine", conditions, function (result) {
        console.log(result);
    });
}
test();

// Export the orm object for the model (burger.js)
module.exports = orm;

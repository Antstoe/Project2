// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var wine = {
  all: function(cb) {
    orm.all("wine", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("wine", cols, vals, function(res) {
      cb(res);
    });
  },
  search: function(conditionsArr, cb) {
    orm.search("wine", conditionsArr, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = wine;
function test(){
  var conditions = ["body = 'light'","type = 'Sparkling'"];
  wine.search(conditions,function(res){
    console.log(res);
  });
}
// test();
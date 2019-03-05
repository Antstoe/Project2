// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var weed = {
  all: function(cb) {
    orm.all("weed", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("weed", cols, vals, function(res) {
      cb(res);
    });
  },
  search: function(conditionsArr, cb) {
    orm.search("weed", conditionsArr, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = weed;
function test(){
  var conditions = ["effects = 'Energetic'","winetype = 'Sparkling'"];
  weed.search(conditions,function(res){
    console.log(res);
  });
}
//  test();
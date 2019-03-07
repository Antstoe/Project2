// Set up MySQL connection.
var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3307,
//   user: "root",
//   password: "root",
//   database: "proj2_db"
// });
var connection;
if (process.env.JAWSDB_URL) {
  // Database is JawsDB on Heroku
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  // Database is local
  connection = mysql.createConnection({
      port: 3306,
      host: 'localhost',
      user: 'tvqp7z8wsb4d6vyv',
      password: 'elbmnsp4t9dyp3s3',
      database: 'proj2_db'
  })
};

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;

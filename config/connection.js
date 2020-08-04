const mysql = require ("mysql");

if (process.env.JAWSDB_URL) {
  connection= mysql.createConnection(process.env.JAWSDB_URL); 
} else {
  connection = mysql.createConnection ({
    host: "localhost",
    port: 3306,
    user:"root",
    password: "5419#Mason!",
    database: "burgers_db"
  });
}

// making connection
connection.connect();

module.exports = connection;
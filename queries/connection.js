const mysql = require("mysql2");

// create connection to database
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Theresabj",
  database: "employeeTracker_db",
});

// connect to the database
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to the database.");
});

// export the connection
module.exports = connection;

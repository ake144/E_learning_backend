/**
 * db
 * @module db
 */
require("dotenv").config();
const mysql = require("mysql2");
const db = mysql.createConnection({
  host:process.env.HOST,
  user:process.env.DB_USER,
  password:process.env.DB_PASS,
  database:process.env.DATABASE
});


db.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database!");
});

module.exports = db.promise();

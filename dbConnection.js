const mysql = require("mysql2");

const db_connection = mysql
  .createConnection({
    host: "localhost", // HOST NAME
    user: "root", // USER NAME
    database: "selasar", // DATABASE NAME
    password: "", // DATABASE PASSWORD
  })
  .on("error", (err) => {
    console.log("Failed to connect to database - ", err);
  });

module.exports = db_connection;
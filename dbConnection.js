const mysql = require("mysql2");

const db_connection = mysql
  .createConnection({
    host: "ip_public", // HOST NAME
    user: "db_user", // USER NAME
    database: "db_name", // DATABASE NAME
    password: "db_password", // DATABASE PASSWORD
  })
  .on("error", (err) => {
    console.log("Failed to connect to database - ", err);
  });

module.exports = db_connection;
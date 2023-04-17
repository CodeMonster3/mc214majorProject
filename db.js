// Create a MySQL connection
const mysql = require("mysql");
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'Rusty5',
    password: '12345678',
    database: 'xyz'
});

// Connect to the MySQL database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database: ' + err.stack);
        return;
    }

    console.log('Connected to MySQL database as id ' + connection.threadId);
});

module.exports = connection;

const express = require('express');
const app = express();
const connection = require('./db.js')


const indexRoute = require('./routes/index.js');


app.use(express.static('/public'));

app.use('/users',indexRoute);

app.set('views','./views');
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);


// Define a route
app.get('/data', (req, res) => {
    // Run a MySQL query
    connection.query('SELECT * FROM asset', (err, rows, fields) => {
        if (err) throw err;

        // Send the results to the client
        res.send(rows);
    });
});



// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
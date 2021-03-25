// Dependancies
const mysql = require('mysql');
let connection;

// If JAWSDB is available to use from heroku, create the mysql connection using the JAWSDB_URL 
if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);

// Otherwise, set up the connection locally using our mysql username and password
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        // UPDATE THIS VALUE WITH YOUR OWN PASSWORD!
        password: 'kingDDom.',
        database: 'burgers_db'
    });
};

// Callback function to initialize connection to mysql database
connection.connect((err) => {

    // If there is an error, log the error to the terminal and return out of the connection
    if(err) {
        console.error(`Unable to connect; ${err.stack}`)
        return;
    }
    // Otherwise, on a successful connection, display the threadID to the terminal
    console.log(`connected as id ${connection.threadId}`);
});

// Export connection to be used by server
module.exports = connection;
const connection = require('./connection.js');

// Helper function to convert object key/value pairs to SQL syntax
const objToSql = (ob) => {
    const arr = [];
  
    // Iterate through each key and push the key/value pair as a string int array
    for (const key in ob) {
      let value = ob[key];

      // Check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {

        // If string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === 'string' && value.indexOf(' ') >= 0) {
          value = `'${value}'`;
        }

        arr.push(`${key}=${value}`);
      }
    }
  
    // Translate array of strings to a single comma-separated string
    return arr.toString();
};

const orm = {
    selectAll(tableInput, cb) {
        const queryStr = `SELECT * FROM ${tableInput}`;

        connection.query(queryStr, (err, result) => {
            if (err) { throw err; }
            cb(result);
        });
    }
}
module.exports = orm;
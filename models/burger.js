// Require ORM
const orm = require('../config/orm');

// Object containing ORM Database Functions:
const burger = {

    // Selects all burgers from the table
    selectAll(cb) {
        orm.selectAll(
            'burgers',
            (res) => cb(res)
        );
    },

    // Create + Inserts a new row into the burgers table
    create(cols, vals, cb) {
        orm.insertOne(
            'burgers',
             cols, vals, (res) => cb(res)
        );
    },

    // Updates a field from a burger from the table
    updateOne(objColVals, condition, cb) {
        orm.updateOne(
            'burgers',
            objColVals, condition, (res) => cb(res)
        );
    },

    // Deletes a burger from the table
    deleteOne(condition, cb) {
        orm.deleteOne(
            'burgers',
            condition, (res) => cb(res)
        );
    }
};

// Export database functions for the controller to use
module.exports = burger;
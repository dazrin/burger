const express = require ('express');
const burger = require('../models/burger');
const router = express.Router();

// Main route; Calls database function to get all burgers from the table
router.get('/', (req, res) => {
    burger.selectAll((data) => {
        const hbsObj = { burgers: data };
        res.render('index', hbsObj);
    });
});

// Create route; Calls database function to create a new row in the table using input data
router.post('/api/burgers', (req, res) => {
    burger.create('burger_name', req.body.name, (result) => {
        res.json({ id: result.insertId });
    });
});

// Update route; Calls database function to update a row based on a condition
router.put('/api/burgers/:id', (req, res) => {
    const condition = `id = ${req.params.id}`;
  
    console.log('condition', condition);
  
    burger.updateOne(
      {
        devoured: req.body.devoured,
      },
      condition,
      (result) => {
        if (result.changedRows == 0) {
          // If no rows were changed, then the ID must not exist, so send 404
          return res.status(404).end();
        }
        res.status(200).end();
      }
    );
    
});


// Delete route; Calls database function to remove a row based on a condition
router.delete('/api/burgers/:id', (req, res) => {
    const condition = `id = ${req.params.id}`;
  
    console.log('condition', condition);
  
    burger.deleteOne(
      condition,
      (result) => {
        if (result.affectedRows == 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
      }
    );
  });

  // Export routes for server
module.exports = router;
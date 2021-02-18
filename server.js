// Require Dependencies
const express = require('express');
const exphbs = require('express-handlebars');

// Create express instance called 'app'
const app = express();

// Set port for heroku and localhost
const PORT = process.env.PORT || 8080;

// Allow app to serve static content from 'public' directory
app.use(express.static('public'));

// Allow app to parse the request body as JSON object
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Allow app to use handlebars to generate HTML
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Allow app to use routes for server to get data
const routes = require('./controllers/burgers_controller.js');
app.use(routes);

// Allows app to start by listening on specified PORT
app.listen(PORT, () => console.log(`server listening on http://localhost:${PORT}`));
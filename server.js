// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var bodyParser= require("body-parser")

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Routing
// =============================================================
require(path.join(__dirname, "./app/routing/apiRoutes"))(app);
require(path.join(__dirname, "./app/routing/htmlRoutes"))(app);

// Data Parsing
// =============================================================
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
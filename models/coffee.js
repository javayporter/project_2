// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Character" model that matches up with DB
var Coffee = sequelize.define("Coffee", {

  name: Sequelize.STRING,
  // the character's role (a string)
  calories: Sequelize.INTEGER,
  // the character's age (a string)
  rating: Sequelize.INTEGER,
  
  // and the character's force points (an int)
  review: Sequelize.Text
},

);

// Syncs with DB
Coffee.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Coffee;

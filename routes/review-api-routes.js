/* eslint-disable linebreak-style */
// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  app.get("/api/drink", function(req, res) {
    db.Review.findAll({
      //include: [db.User]
    }).then(function(dbReviews) {
        var drinkCat=[];
        for(var i=0;i<dbReviews.length;i++){
            drinkCat.push(dbReviews[i].coffeeName)

        }
      res.json(drinkCat);
    });
  });



};

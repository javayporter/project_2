/* eslint-disable linebreak-style */
// Requiring path to so we can use relative routes to our HTML files
var db = require("../models");
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/location.html"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/signup", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/survey",function(req,res){
    res.sendFile(path.join(__dirname, "../public/location.html"));
  });

  app.get("/reviews", async function(req, res) {
    let reviewData = await db.Review.findAll({
      include: [db.Category, db.Coffee, db.User]
    });
    let reviews = reviewData.map(function(item) {
      return { id: item.id, rating: item.rating, coffeeReview: item.coffeeReview, categoryName: item.Category.name, coffeeName: item.Coffee.name };
    });

    res.render("reviews", { reviews: reviews });
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members",/* isAuthenticated,*/ async function(req, res) {
    let cateoryData = await db.Category.findAll();
    let coffeeNameData = await db.Coffee.findAll();
    
    let categories = cateoryData.map(function(item) {
        return { id: item.id, name: item.name };
    });
    let coffeeNames = coffeeNameData.map(function(item) {
      return { id: item.id, name: item.name };
    });
    res.render("members", {
        categories: categories,
        coffeeNames: coffeeNames,
    });
  });
};

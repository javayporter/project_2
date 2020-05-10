// Requiring our models and passport as we've configured it
var db = require("../models");

module.exports = function(app) {

  app.post("/api/members", function(req, res) {
    db.Review.create({
      coffeeCategory: req.body.category,
      coffeeName: req.body.kindOfCoffee,
      rating: req.body.ratingInput,
      coffeeReview: req.body.mainReview
    })
      .then(function(data) {
        // res.redirect(307, "/api/members");
        res.json(data)
        console.log(data);
      });
    //   .catch(function(err) {
    //     res.status(401).json(err);
    //     console.log(err)
    //   });
  });
};
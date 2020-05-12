/* eslint-disable linebreak-style */
/* eslint-disable no-use-before-define */
$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form.review");
  var category = $("#category");
  var kindOfCoffee = $("input#kindOfCoffee");
  var ratingInput= $("#rating-input");
  var mainReview = $("textarea#main-review");

  $(signUpForm).on("submit", function (event) {
    event.preventDefault();

    // Constructing a newPost object to hand to the database
    var newPost = {
      coffeeCategory: category.val(),
      coffeeName: kindOfCoffee.val().trim(),
      rating: ratingInput.val(),
      coffeeReview: mainReview.val().trim()
    };

    if (!newPost) {
      return;
    }

    category.val(""),
    kindOfCoffee.val(""),
    ratingInput.val(""),
    mainReview.val("");
    // eslint-disable-next-line no-use-before-define
    submitPost(newPost);

  });

  // Submits a new post
  function submitPost(Post) {
    $.post("/api/members", Post);
  }

  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.firstName);
  });

  var reviewsContainer = $(".card-group");

  // Our initial review array
  var reviews = [];

  // Getting reviews from database when page loads
  // $(document).on("click", "#allRating", getReviews);
  getReviews();

  // This function resets the todos displayed with new todos from the database
  function initializeRows() {
    // $todoContainer.empty();
    var rowsToAdd = [];
    for (var i = 0; i < reviews.length; i++) {
      rowsToAdd.push(createNewRow(reviews[i]));
    }
    reviewsContainer.prepend(rowsToAdd);
  }
  // This function grabs todos from the database and updates the view
  function getReviews() {
    $.get("/api/reviews", function(reviewsData) {
      reviews = reviewsData;
      initializeRows();
    });
  }

  // This function constructs a todo-item row
  function createNewRow(review) {
    var newInputRow = $(
      [
        "<div class='card mb-3' style='max-width: 540px;'>",
        "<div class='row row-cols-1 row-cols-md-3 no-gutters'>",
        "<div class='col-md-4'>",
        "<img src='/public/assets/img/coffee-img.jpg' class='card-img' alt='beautiful-coffee-img'>",
        "</div>",
        "<div class='col-md-4'>",
        "<div class='card-body'>",
        "<h4 class='card-title'>",
        review.coffeeCategory,
        "</h4>",
        "<h5>",
        review.coffeeName,
        "</h5>",
        "<p class='card-text'>",
        review.coffeeReview,
        "</p>",
        "<p class='card-text'><small class='text-muted'>Last updated by:<span>",
        review.User.firstName,
        "<br>",
        review.updatedAt,
        "</span></small></p>",
        "</div>",
        "</div>",
        "</div>",
        "</div>"
      ].join("")
    );
    reviewsContainer.append(newInputRow);
  }
});

/* eslint-disable linebreak-style */
/* eslint-disable no-use-before-define */
$(document).ready(function() {
  // Getting references to our form, input click events
  var signUpForm = $("form.review");
  var category = $("#category");
  var coffeeName = $("#coffeeName");
  var ratingInput= $("#rating-input");
  var mainReview = $("textarea#main-review");
  var allRating = $("#allRating");
  var addNew = $("#addNew");
  var reviewsContainer = $(".card-group");

  $(signUpForm).on("submit", function (event) {
    event.preventDefault();

    // Constructing a newPost object to hand to the database
    var newPost = {
      coffeeCategoryId: category.val(),
      coffeeNameId: coffeeName.val(),
      rating: ratingInput.val(),
      coffeeReview: mainReview.val().trim()
    };

    if (!newPost) {
      return;
    }

    category.val(""),
    coffeeName.val(""),
    ratingInput.val(""),
    mainReview.val("");
    // eslint-disable-next-line no-use-before-define
    submitPost(newPost);

  });

  // Submits a new post
  function submitPost(Post) {
    $.post("/api/members", Post);
  }

  //Getting users data form db
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.firstName);
  });

  //Add new button click event to display only the review form
  $(addNew).on("click", function(){
    window.location.href = "/members";
  });

  //Initiating get review
//  $(allRating).on("click", getReviews);


  // Our initial review array
  var reviews = [];


  // This function resets the reviews to displayed new reviews from the database
  function initializeRows() {
    reviewsContainer.empty();
    var rowsToAdd = [];
    for (var i = 0; i < reviews.length; i++) {
      rowsToAdd.push(createNewRow(reviews[i]));
    }
  }
  // This function grabs reviews from the database and updates the view
  function getReviews() {
    $.get("/api/reviews", function(reviewsData) {
      reviews = reviewsData;
      $(".review").css("display", "none");
      initializeRows();
    });
  }

  // This function constructs a review item row
  function createNewRow(review) {
    var newInputRow = $(
      [
        "<div class='card mb-3' style='max-width: 540px;float: left;'>",
        "<div class='row no-gutters'>",
        "<div class='col-md-2'>",
        "<img id='coffeeImg' src='/assets/img/coffee-mug.png'>",
        "</div>",
        "<div class='col-md-10'>",
        "<div class='card-body'>",
        "<h4 class='card-title'>",
        review.coffeeCategory,
        "</h4>",
        "<h5>",
        review.coffeeName,
        "</h5>",
        "<p class='card-text'>Rating: <span>",
        review.rating,
        " </span>",
        "</p>",
        "<p class='card-text'>",
        review.coffeeReview,
        "</p>",
        "<p class='card-text'><small class='text-muted'>Last updated by: <span>",
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
    // switch (review.coffeeCategory) {
    // case "Iced Coffee":
    //   $(img).attr("src","/assets/img/iced-coffee.jpg");
    //   break;
    // case "Hot Coffee":
    //   $("img").attr("src","/assets/img/hot-coffee.jpg");
    //   break;
    // case "Espresso":
    //   $("img").attr("src","/assets/img/espresso.jpg");
    //   break;
    // case "Frappuccino":
    //   $("img").attr("src","/assets/img/frappuccino.jpg");
    //   break;
    // case "Macchiato":
    //   $("img").attr("src","/assets/img/macchiato.jpg");
    //   break;
    // default:
    //   $("img").attr("src","/assets/img/coffee-img.jpg");
    // }
    // if (review.coffeeCategory ==="Iced Coffee") {
    //   $("#coffeeImg").css("background-image","url('/assets/img/espresso.jpg')");
    // } else if (review.coffeeCategory === "Hot Coffee") {
    //   $("#coffeeImg").css("background-image","url('/assets/img/hot-coffee.jpg')");
    // } else if (review.coffeeCategory === "Espresso") {
    //   $("#coffeeImg").css("background-image","url('/assets/img/espresso.jpg')");
    // } else if (review.coffeeCategory === "Frappuccino") {
    //   $("#coffeeImg").css("background-image","url('/assets/img/espresso.jpg')");
    // } else if (review.coffeeCategory === "Macchiato") {
    //   $("#coffeeImg").css("background-image","url('/assets/img/macchiato.jpg')");
    // } else {
    //   $("#coffeeImg").css("background-image","url('/assets/img/coffee-img.jpg')");
    // }
    reviewsContainer.append(newInputRow);
  }
});

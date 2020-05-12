/* eslint-disable linebreak-style */
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
});

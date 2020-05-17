/* eslint-disable linebreak-style */
/* eslint-disable no-use-before-define */
$(document).ready(function() {
  // Getting references to our form, input click events
  var signUpForm = $("form.review");
  var category = $("#category");
  var coffeeName = $("#coffeeName");
  var ratingInput= $("#rating-input");
  var mainReview = $("textarea#main-review");

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

});

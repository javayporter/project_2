$(document).ready(function() {
   // Getting references to our form and input
   var signUpForm = $("form.review");
   var category = $("#category");
   var kindOfCoffee = $("input#kindOfCoffee");
   var ratingInput= $("#rating-input");
   var mainReview = $("textarea#main-review");

   $(signUpForm).on("submit", function (event) {
    event.preventDefault();
    // Wont submit the post if we are missing a body or a title
    if (!ratingInput.val().trim() || !mainReview.val().trim()) {
      return;
    }
    // Constructing a newPost object to hand to the database
    var newPost = {
      coffeeCategory: category.val(),
      coffeeName: kindOfCoffee.val().trim(),
      rating: ratingInput.val(),
      coffeeReview: mainReview.val().trim()
    };

    console.log(newPost);

    // If we're updating a post run updatePost to update a post
    // Otherwise run submitPost to create a whole new post
    
      submitPost(newPost);
    
  });

  // Submits a new post and brings user to blog page upon completion
  function submitPost(Post) {
    $.post("/api/members/", Post, function() {
      window.location.href = "/members";
    });
  }
 
//   signUpForm.on("submit", function(event) {
//     // Make sure to preventDefault on a submit event.
//     event.preventDefault();

//     //Grab burger name from form field.
//     //When user submits burger name, set devoured state to false.
//     var newPost = {
//     coffeeCategory: category.val(),
//     coffeeName: kindOfCoffee.val().trim(),
//     rating: ratingInput.val(),
//     coffeeReview: mainReview.val().trim()
//     };

//     // Send the POST request using ajax.
//     $.ajax("/api/members", {
//     type: "POST",
//     data: newPost
//     }).then(
//     function(data) {
//         console.log(data);
//         // Reload the page to get the updated list
//         location.reload();
//     });

// });

  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  });
});

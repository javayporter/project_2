// This function grabs reviews from the database and updates the view
function getDrinks() {
  $.get("/api/drink", function(reviewsData) {
    var reviews = reviewsData;
    console.log(reviews);

    //  <select class="custom-select" id="category">
    //           <option selected value="" id="category">Select Coffee Category</option>
    //           <option value="Cold Coffee">Hot Coffee</option>
    //           <option value="Hot Coffee">Iced Coffee</option>
    //           <option value="Esspereso">Espresso</option>
    //           <option value="Esspereso">Frappuccino</option>
    //           <option value="Esspereso">Macchiato</option>
    // </select>
    //     var select=$("<select>");
    //     select.attr("class","custom-select");
    //     select.attr("id","category");

    //     var firstOption=$("<option>");
    //     firstOption.attr("value","");
    //     firstOption.attr("id","category");
    //     firstOption.text("select Coffee");
    //     for(var i=0;i<reviews.length;i++){
    //         var option=$("<option>");
    //         option.attr("value",reviews[i]);
    //         option.text(reviews[i]);
    //         firstOption.append(option);
    //     }
    // }
           

    var fdDiv = $("#drinkCatDropDown");
    var partOne = "<a class=\"dropdown-item\">";

    for (var i=0; i < reviews.length; i++) {
      fdDiv.append(partOne + reviews[i] + "</a> <br>");
    }
    fdDiv.append("</div>");
  });
}
getDrinks();
 // This function grabs coffee from the database and updates the view
 function getCoffee(category) {
    var categoryString = category || "";
    if (categoryString) {
      categoryString = "/category/" + categoryString;
    }
    $.get("/api/coffee" + categoryString, function(data) {
      console.log("Coffee", data);
      coffee = data;
      if (!coffee || !coffee.length) {
        displayEmpty();
      }
      else {
        displayCoffee();
      }
    });
  }

  // This function handles reloading different coffee types when the category changes
  //server side filtering - make request on back end, only sends info requested 
  //client side filtering - get everything form backend and  use front end to filter 
      function handleCategoryChange() {
          var newCoffeeCategory = $(this).val();
          getCoffee(newCoffeeCategory);
        }
      
      });


// functions displays the list queried based on category selected <--(is this a word?)
function  displayCoffee() 

Steps
  
//sequelize
//page loads, coffee list loads (not rendered on page yet)
//on change event** <-- trigger when list is filtered on the front end
//no select, no list
//display list



  // This function queries the db for Cold Coffee
  function queryColdCoffee() {
      connection.query("SELECT * FROM coffee WHERE category = 'cold'", function(err, res) {
          if (err) throw err;
  }

  // This function queries the db for Hot Coffee
  function queryHotCoffee() {
      connection.query("SELECT * FROM coffee WHERE category = 'hot'", function(err, res) {
          if (err) throw err;
  }

  // This function queries the db for Espresso
  function queryEspressp() {
      connection.query("SELECT * FROM coffee WHERE category = 'espresso'", function(err, res) {
          if (err) throw err;
  }

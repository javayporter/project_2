$(document).ready(function () {
    $("#search").on("click", function () {
        var location = $("#userlocation").val()
        getmap(location)
    })

    function getmap(location) {
        // $("#cityname").html("Starbucks at Location: " + location.toUpperCase())
        $.ajax({
            url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=starbucks+in+" +
                location + "&key=AIzaSyAriXxPMt_ogYg9aHln6QbvoT0FZxW0_og",
            method: "GET"

        })
            .then(function (results) {
                $("tbody").empty();
                console.log("API Results", results.results);
                for (i = 0; i < 10; i++) {
                    var location = results.results[i].formatted_address;
                    var rating = results.results[i].rating;
                    console.log("location", location);
                    console.log("rating", rating);
                    $("tbody").append("<tr><td>" + location + "</td><td>" + rating + "</td></tr>")
                }

                renderOnMap(results.results);
            })

    }

    function renderOnMap(array) {
        var map = new google.maps.Map(
            document.getElementById('map'), {
            zoom: 12,
            center: {
                lat: array[0].geometry.location.lat,
                lng: array[0].geometry.location.lng
            }
        });

        array.forEach(element => {
            var marker = new google.maps.Marker({
                position: {
                    lat: element.geometry.location.lat,
                    lng: element.geometry.location.lng
                },
                map: map
            });
        });

    }
    getmap("Washington, DC")


});
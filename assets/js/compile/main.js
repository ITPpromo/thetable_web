'use strict';

(function () {
  /*--------------
  / Slider
  --------------*/
  if ($('#slider_1').length) {
    $('#slider_1').owlCarousel({
      responsive: {
        0: {
          items: 1
        },
        375: {
          items: 2
        },
        640: {
          items: 3
        },
        1024: {
          items: 4
        }
      },
      loop: true,
      margin: 8,
      smartSpeed: 500,
      navElement: 'a',
      navContainerClass: 'slider--nav',
      navClass: ['slider--prev', 'slider--next'],
      nav: true,
      navText: ['<img src="./assets/img/arrow_left.png" />', '<img src="./assets/img/arrow_rigth.png" />']
    });
  }
})();

$('.banner-lg--scroll').on("click", function (e) {
  e.preventDefault();
  var id = $(this).attr('href'),
      top = $(id).offset().top;

  $('body,html').animate({ scrollTop: top }, 800);
});

/*--------------
/ Google Map
--------------*/
function initMap() {
  var uluru = { lat: 50.432117, lng: 30.457622 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    icon: './assets/img/map_home_page.png'
  });
}

function initMapRestourants() {

  var map = new google.maps.Map(document.getElementById('booking_map'), {
    zoom: 12,
    center: { lat: 50.432117, lng: 30.457622 }
  });

  // Create an array of alphabetical characters used to label the markers.
  var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given "locations" array.
  // The map() method here has nothing to do with the Google Maps API.
  var markers = locations.map(function (location, i) {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
      icon: './assets/img/map_restaurants.png'
    });
  });

  // Add a marker clusterer to manage the markers.
  var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}
var locations = [{ lat: 50.432117, lng: 30.457622 }, { lat: 50.500839, lng: 30.736061 }, { lat: 50.517709, lng: 30.483089 }, { lat: 50.464766, lng: 30.466267 }];
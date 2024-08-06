// index.js
var map;
var marker;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8
  });

  map.addListener('click', function(event) {
    placeMarker(event.latLng);
  });
}

function placeMarker(location) {
  if (marker) {
    marker.setPosition(location);
  } else {
    marker = new google.maps.Marker({
      position: location,
      map: map
    });
  }
  document.getElementById('query').value = location.lat() + ", " + location.lng();
}

function sendQuery() {
  var query = document.getElementById('query').value;
  alert("Query sent: " + query);
}

function loadScript(url, callback) {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  if (script.readyState) {  // only required for IE <9
    script.onreadystatechange = function() {
      if (script.readyState == 'loaded' || script.readyState == 'complete') {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {  //Others
    script.onload = function() {
      callback();
    };
  }
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}

window.onload = function() {
  loadScript(`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}`, initMap);
};

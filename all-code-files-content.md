### config.js
```js
// config.js
const GOOGLE_MAPS_API_KEY = 'AIzaSyB2rgaCdaipMd_KrgdRrIohbUW1e3eKaYk';

```

### index.js
```js
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
  document.getElementById('location').value = location.lat() + ", " + location.lng();
}

function sendQuery() {
  var query = document.getElementById('location').value;
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

```

### styles.css
```css
#map {
    height: 400px;
    width: 100%;
  }
  
```

### index.html
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Google Maps JavaScript API</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
  </head>
  <body>
    <h1>Google Map Example</h1>
    <div id="map"></div>
    <label for="location">Show Location:</label>
    <input type="text" id="location" placeholder="Enter location">
    <br />
    <input type="text" id="prompt" placeholder="Enter prompt" value="親子家庭尋找有養小動物的平價餐廳">

    <button onclick="sendQuery()">Send Query</button>
    
    <script src="config.js"></script>
    <script src="index.js"></script>
  </body>
</html>

```


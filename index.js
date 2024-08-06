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


async function callGeminiAPI(prompt, systemInstruction) {
  const apiKey = GEMINI_API_KEY; // Use the API key from config.js
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
  
  const data = {
    "contents": [
      {
        "role": "user",
        "parts": [
          {
            "text": prompt
          }
        ]
      }
    ],
    "systemInstruction": {
      "role": "user",
      "parts": [
        {
          "text": systemInstruction
        }
      ]
    },
    "generationConfig": {
      "temperature": 1,
      "topK": 64,
      "topP": 0.95,
      "maxOutputTokens": 8192,
      "responseMimeType": "application/json"
    }
  };
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  const result = await response.json();
  const text = result.candidates[0].content.parts[0].text;
  return text;
}

async function sendQuery() {
  var location = document.getElementById('location').value;
  var prompt = document.getElementById('prompt').value;
  var systemInstruction = GET_QUERY_SYSTEM_INSTRUCTION; // Use the system instruction from config.js

  if (!prompt || !location) {
    alert('Please enter both a prompt and a location.');
    return;
  }

  try {
    const result = await callGeminiAPI(prompt, systemInstruction);
    console.log(result)
    displayResult(result);
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    alert('Failed to retrieve data from Gemini API.');
  }
}


function displayResult(resultText) {
  const outputDiv = document.getElementById('result');
  outputDiv.innerHTML = `<pre>${resultText}</pre>`;
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

// index.js
async function sendQuery() {
  var location = document.getElementById('location').value;
  var prompt = document.getElementById('prompt').value;
  var systemInstruction = GET_QUERY_SYSTEM_INSTRUCTION; // Use the system instruction from config.js

  if (!prompt || !location) {
    alert('Please enter both a prompt and a location.');
    return;
  }

  try {
    const result = await callGeminiAPI(prompt, systemInstruction, "application/json");
    console.log(result)

    let r= JSON.parse(result)
    console.log(r)

    displayQuery(r);
    await getPlaceAPI(r, location); // Call the getPlaceAPI function with the result and location
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    alert('Failed to retrieve data from Gemini API.');
  }
}

async function getPlaceAPI(result, location) {
  console.log(result.type)
  console.log(location)
   
  const apiKey = PLACE_API_KEY; // Replace with your actual API key
  const url = 'https://places.googleapis.com/v1/places:searchText';
  const [latitude, longitude] = location.split(',').map(Number);

  const data = {
    textQuery: result.keyword,
    priceLevels: result.priceLevel,
    includedType: result.type,
    languageCode: result.languageCode,
    locationBias: {
      circle: {
        center: { latitude, longitude },
        radius: 500.0
      }
    }
  };
  console.log(data)

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'places.displayName,places.formattedAddress'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log(responseData);
    displayPlace(responseData);
  } catch (error) {
    console.error('Error calling Places API:', error);
    alert('Failed to retrieve data from Places API.');
  }
}

function displayQuery(resultText) {
  const outputDiv = document.getElementById('queryBox');
  outputDiv.innerHTML = `<pre>${JSON.stringify(resultText, null, 2)}</pre>`;
}

function displayPlace(resultText) {
  const outputDiv = document.getElementById('placeBox');
  outputDiv.innerHTML = `<pre>${JSON.stringify(resultText, null, 2)}</pre>`;
}
window.onload = function() {
  loadScript(`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}`, initMap);
};

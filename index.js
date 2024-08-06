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

    let r = JSON.parse(result)
    console.log(r)

    displayQuery(r);
    await getPlaceAPI(r, location); // Call the getPlaceAPI function with the result and location
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    alert('Failed to retrieve data from Gemini API.');
  }
}

function displayQuery(resultText) {
  const outputDiv = document.getElementById('queryBox');
  outputDiv.innerHTML = `<pre>${JSON.stringify(resultText, null, 2)}</pre>`;
}


function displayPlace(responseData) {
  const outputDiv = document.getElementById('placeBox');
  const places = responseData.places.map(place => `
    <div class="place">
      <h3>${place.displayName.text}</h3>
      <p>${place.formattedAddress}</p>
      <div class="reviews">
        ${place.reviews.map(review => `
          <div class="review">
            <p><strong>${review.authorAttribution.displayName}</strong> (${review.relativePublishTimeDescription}):</p>
            <p>Rating: ${review.rating}</p>
            <p>${review.text.text}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
  outputDiv.innerHTML = places;
}

window.onload = function() {
  loadScript(`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}`, initMap);
};

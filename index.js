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
    console.log(result);

    let r = JSON.parse(result);
    console.log(r);

    displayQuery(r);
    const placeResponse = await getPlaceAPI(r, location); // Call the getPlaceAPI function with the result and location
    displayPlace(placeResponse); // Display the place data without summaries

    // Combine each place's reviews and summarize them
    for (const [index, place] of placeResponse.places.entries()) {
      const combinedReviews = place.reviews.map(review => review.text.text).join(' ');
      const summary = await callGeminiAPI(`# conditions ${r["conditions"]} # reviews ${combinedReviews}`, GET_SCORE_SYSTEM_INSTRUCTION, "application/json");
      place.summary = summary;
      updatePlaceSummary(index, summary); // Update the summary in the HTML
    }

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
  const places = responseData.places.map((place, index) => `
    <div class="place" id="place-${index}">
      <h3>${place.displayName.text}</h3>
      <p>${place.formattedAddress}</p>
      <p><strong>Summary:</strong> <span id="summary-${index}">Loading summary...</span></p>
      <button onclick="toggleReviews(${index})">Show/Hide Reviews</button>
      <div class="reviews" id="reviews-${index}" style="display: none;">
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

function updatePlaceSummary(index, summary) {
  const summaryElement = document.getElementById(`summary-${index}`);
  if (summaryElement) {
    summaryElement.textContent = summary;
  }
}

function toggleReviews(index) {
  const reviewsDiv = document.getElementById(`reviews-${index}`);
  if (reviewsDiv.style.display === "none") {
    reviewsDiv.style.display = "block";
  } else {
    reviewsDiv.style.display = "none";
  }
}

window.onload = function () {
  loadScript(`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}`, initMap);
};

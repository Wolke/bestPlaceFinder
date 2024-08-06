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

window.onload = function() {
  loadScript(`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}`, initMap);
};

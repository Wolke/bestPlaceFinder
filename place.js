// place.js
async function getPlaceAPI(query) {
  // console.log(result.type);
  // console.log(location);

  const apiKey = PLACE_API_KEY; // Replace with your actual API key
  const url = 'https://places.googleapis.com/v1/places:searchText';
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'places.displayName,places.formattedAddress,places.reviews,places.googleMapsUri'
      },
      body: JSON.stringify(query)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log(responseData);
    return responseData; // Return the response data instead of displaying it
  } catch (error) {
    console.error('Error calling Places API:', error);
    alert('Failed to retrieve data from Places API.');
  }
}

// place.js
async function getPlaceAPI(result, location) {
    console.log(result.type);
    console.log(location);
  
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
    console.log(data);
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Goog-Api-Key': apiKey,
          'X-Goog-FieldMask': 'places.displayName,places.formattedAddress,places.reviews'
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
  
### map.js
```js
// map.js
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

```

### config.js
```js
// config.js
const GOOGLE_MAPS_API_KEY = 'AIzaSyB2rgaCdaipMd_KrgdRrIohbUW1e3eKaYk';
const GEMINI_API_KEY = "AIzaSyCYvnoIz4UqaII-VvJp64J7vs5zP6-LpSQ"; // Replace with your actual API key
const PLACE_API_KEY = "AIzaSyAS0Teq6DMYc2ivC1H2zMxePY-5jn6eBto";
const GET_QUERY_SYSTEM_INSTRUCTION = `# field
- type: according ## type select one 
- languageCode: according to user input and find one on ## languageCode 
- priceLevel: according ## priceLevel choose one or two
- keyword: according to user input
- conditions: Based on user input, come up with five requirements that they value most.
ex:
{
"type": "car_wash",
"languageCode": "en",
"priceLevel": [
    "PRICE_LEVEL_INEXPENSIVE",
    "PRICE_LEVEL_VERY_EXPENSIVE"
  ],
"keyword": "spice girl"
"conditions":[...]
}

## type
car_dealer
car_rental
car_repair
car_wash
electric_vehicle_charging_station
gas_station
parking
rest_stop
farm
art_gallery
museum
performing_arts_theater
library
preschool
primary_school\tschool
secondary_school
university
amusement_center
amusement_park
aquarium
banquet_hall
bowling_alley
casino
community_center
convention_center
cultural_center
dog_park
event_venue
hiking_area
historical_landmark
marina
movie_rental
movie_theater
national_park
night_club
park
tourist_attraction
visitor_center
wedding_venue
zoo
accounting
atm
bank
Food and Drink
american_restaurant
bakery
bar
barbecue_restaurant
brazilian_restaurant
breakfast_restaurant
brunch_restaurant
cafe
chinese_restaurant
coffee_shop
fast_food_restaurant
french_restaurant
greek_restaurant
hamburger_restaurant
ice_cream_shop
indian_restaurant
indonesian_restaurant
italian_restaurant
japanese_restaurant
korean_restaurant\t
lebanese_restaurant
meal_delivery
meal_takeaway
mediterranean_restaurant
mexican_restaurant
middle_eastern_restaurant
pizza_restaurant
ramen_restaurant
restaurant
sandwich_shop
seafood_restaurant
spanish_restaurant
steak_house
sushi_restaurant
thai_restaurant\tturkish_restaurant
vegan_restaurant
vegetarian_restaurant
vietnamese_restaurant
administrative_area_level_1
administrative_area_level_2
country\tlocality
postal_code
school_district
Government
city_hall
courthouse
embassy
fire_station\t
local_government_office
police
post_office
Health and Wellness
dental_clinic
dentist
doctor
drugstore
hospital\tmedical_lab
pharmacy
physiotherapist
spa
Lodging
bed_and_breakfast
campground
camping_cabin
cottage
extended_stay_hotel
farmstay
guest_house\thostel
hotel
lodging
motel
private_guest_room
resort_hotel
rv_park
Places of Worship
church
hindu_temple
mosque
synagogue
Services
barber_shop
beauty_salon
cemetery
child_care_agency
consultant
courier_service\nelectrician
florist
funeral_home
hair_care
hair_salon
insurance_agency\t
laundry
lawyer
locksmith
moving_company
painter
plumber
real_estate_agency
roofing_contractor
storage\ttailor
telecommunications_service_provider
travel_agency
veterinary_care\tauto_parts_store
bicycle_store
book_store
cell_phone_store
clothing_store
convenience_store
department_store
discount_store
electronics_store
furniture_store
gift_shop
grocery_store
hardware_store
home_goods_store\t
home_improvement_store
jewelry_store
liquor_store
market
pet_store
shoe_store
shopping_mall
sporting_goods_store
store
supermarket
wholesaler
athletic_field
fitness_center
golf_course
gym
playground
ski_resort
sports_club
sports_complex
stadium
swimming_pool
Transportation
airport
bus_station
bus_stop
ferry_terminal
heliport
light_rail_station
park_and_ride\t
subway_station
taxi_stand
train_station
transit_depot
transit_station
truck_stop

## languageCode
Language Code\tLanguage\tLanguage Code\tLanguage
af\tAfrikaans\tja\tJapanese
sq\tAlbanian\tkn\tKannada
am\tAmharic\tkk\tKazakh
ar\tArabic\tkm\tKhmer
hy\tArmenian\tko\tKorean
az\tAzerbaijani\tky\tKyrgyz
eu\tBasque\tlo\tLao
be\tBelarusian\tlv\tLatvian
bn\tBengali\tlt\tLithuanian
bs\tBosnian\tmk\tMacedonian
bg\tBulgarian\tms\tMalay
my\tBurmese\tml\tMalayalam
ca\tCatalan\tmr\tMarathi
zh\tChinese\tmn\tMongolian
zh-CN\tChinese (Simplified)\tne\tNepali
zh-HK\tChinese (Hong Kong)\tno\tNorwegian
zh-TW\tChinese (Traditional)\tpl\tPolish
hr\tCroatian\tpt\tPortuguese
cs\tCzech\tpt-BR\tPortuguese (Brazil)
da\tDanish\tpt-PT\tPortuguese (Portugal)
nl\tDutch\tpa\tPunjabi
en\tEnglish\tro\tRomanian
en-AU\tEnglish (Australian)\tru\tRussian
en-GB\tEnglish (Great Britain)\tsr\tSerbian
et\tEstonian\tsi\tSinhalese
fa\tFarsi\tsk\tSlovak
fi\tFinnish\tsl\tSlovenian
fil\tFilipino\tes\tSpanish
fr\tFrench\tes-419\tSpanish (Latin America)
fr-CA\tFrench (Canada)\tsw\tSwahili
gl\tGalician\tsv\tSwedish
ka\tGeorgian\tta\tTamil
de\tGerman\tte\tTelugu
el\tGreek\tth\tThai
gu\tGujarati\ttr\tTurkish
iw\tHebrew\tuk\tUkrainian
hi\tHindi\tur\tUrdu
hu\tHungarian\tuz\tUzbek
is\tIcelandic\tvi\tVietnamese
id\tIndonesian\tzu\tZulu
it\tItalian\t
\t
## priceLevel
PRICE_LEVEL_UNSPECIFIED\tPlace price level is unspecified or unknown.
PRICE_LEVEL_FREE\tPlace provides free services.
PRICE_LEVEL_INEXPENSIVE\tPlace provides inexpensive services.
PRICE_LEVEL_MODERATE\tPlace provides moderately priced services.
PRICE_LEVEL_EXPENSIVE\tPlace provides expensive services.
PRICE_LEVEL_VERY_EXPENSIVE\tPlace provides very expensive services.
`;

```

### index.js
```js
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

```

### gemini.js
```js
// gemini.js
async function callGeminiAPI(prompt, systemInstruction ,responseMimeType ="text/plain"){
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
        "responseMimeType": responseMimeType
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
    <div id="queryBox"></div>
    <div id="placeBox"></div>
    <script src="config.js"></script>
    <script src="place.js"></script>
    <script src="index.js"></script>
    <script src="map.js"></script>
    <script src="gemini.js"></script>
  </body>
</html>

```


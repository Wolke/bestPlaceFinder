// config.js
const GOOGLE_MAPS_API_KEY = 'AIzaSyB2rgaCdaipMd_KrgdRrIohbUW1e3eKaYk';
const GEMINI_API_KEY = "AIzaSyCYvnoIz4UqaII-VvJp64J7vs5zP6-LpSQ"; // Replace with your actual API key
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

console.log(GET_QUERY_SYSTEM_INSTRUCTION)
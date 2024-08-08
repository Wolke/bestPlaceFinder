# The Best Place Finder

The Best Place Finder is a web application that integrates Google Maps, Gemini API, and Places API to find and display places based on user input and location. The application helps users find the best places based on their criteria and displays detailed information and reviews.

## Features

- Google Maps integration for location selection.
- Place markers on the map by clicking.
- Query the Gemini API for structured search criteria.
- Use the Places API to find places based on search criteria.
- Display detailed information about each place, including reviews and summaries.
- Sort places by score based on summarized reviews.

## Getting Started

### Prerequisites

- A web server to host the application (e.g., Apache, Nginx, or a simple HTTP server).
- API keys for Google Maps, Gemini API, and Places API.

### Installation

1. Clone the repository:

   \`\`\`bash
   git clone https://github.com/yourusername/the-best-place-finder.git
   cd the-best-place-finder
   \`\`\`

2. Replace the placeholder API keys in \`config.js\` with your actual API keys:

   \`\`\`js
   // config.js
   const GOOGLE_MAPS_API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY';
   const GEMINI_API_KEY = 'YOUR_GEMINI_API_KEY';
   const PLACE_API_KEY = 'YOUR_PLACE_API_KEY';
   \`\`\`

3. Open \`index.html\` in your web browser or serve it using a web server:

   \`\`\`bash
   python3 -m http.server 8000
   # Open http://localhost:8000 in your web browser
   \`\`\`

## Usage

1. Open the application in your web browser.
2. Click on the map to select a location. The coordinates will be displayed in the "Show Location" input field.
3. Enter a prompt in the prompt input field.
4. Click the "Send Query" button to send the query to the Gemini API and get the results.
5. View the list of places found based on the search criteria, along with detailed information and reviews.

## Live Demo

You can view a live demo of the application [here](https://wolke.github.io/bestPlaceFinder).

## Files

- \`index.html\`: Main HTML structure of the application.
- \`styles.css\`: CSS for styling the map, input fields, and other elements.
- \`map.js\`: Handles the initialization of the Google Map and placing markers.
- \`config.js\`: Contains API keys and template instructions for querying the Gemini API.
- \`index.js\`: Orchestrates the process of sending queries, calling APIs, and displaying results.
- \`place.js\`: Handles the interaction with the Places API.
- \`gemini.js\`: Manages the queue for calling the Gemini API to avoid rate limiting.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Google Maps API](https://developers.google.com/maps/documentation/javascript)
- [Google Places API](https://developers.google.com/maps/documentation/places/web-service/overview)
- [Gemini API](https://developers.google.com/ml-kit/gemini)
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
  
// queueManager.js

class QueueManager {
  constructor() {
    this.queue = [];
    this.processing = false;
  }

  enqueue(task) {
    this.queue.push(task);
    this.processQueue();
  }

  async processQueue() {
    if (this.processing) return;
    this.processing = true;

    while (this.queue.length > 0) {
      const task = this.queue.shift();
      await task();
      await this.delay(4000); // Wait for 4 seconds between tasks
    }

    this.processing = false;
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

const queueManager = new QueueManager();

async function callGeminiAPI(prompt, systemInstruction, responseMimeType = "text/plain") {
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

  return new Promise((resolve, reject) => {
    queueManager.enqueue(async () => {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        const text = result.candidates[0].content.parts[0].text;
        resolve(text);
      } catch (error) {
        reject(error);
      }
    });
  });
}

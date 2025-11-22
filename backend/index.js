import express from "express";
import cors from "cors";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

// Startup instructions:
// Create a .env file in the backend folder with the following content:
// GEMINI_API_KEY=your_gemini_api_key
// GEMINI_MODEL=gemini-2.5-flash
// PORT=4000
// Then run:
// npm init -y => we want to seperate the backend from the frontend packages
// npm install @google/genai express cors dotenv

// To start the server, run:
// cd backend
// npm start
// Put new year's resolution in body as JSON { "prompt": "My new year's resolution is to..." }

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PROMPT_CONTEXT = `
You are a new year's resolution enhancer. 
Your task is to enhance the user's new year's resolution by making it more 
specific, measurable, achievable, relevant, and time-bound (SMART).
Make sure to keep the response concise and focused on the resolution itself,
it should not exceed 50 words.
Provide suggestions to improve the resolution and make it more effective.
If the user does not prove a resolution, you must return EXACTLY THE FOLLOWING:
"Error: No resolution provided. Please provide a new year's resolution to enhance."
The user's new year's resolution is:
`;

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

app.post("/api/generate", async (req, res) => {
    const prompt = req.body.prompt;
    
    const response = await ai.models.generateContent({
        model: process.env.GEMINI_MODEL,
        contents: PROMPT_CONTEXT + prompt,
});
    res.send(response.text);
});

app.listen(process.env.PORT || 4000, () => {
    console.log("Backend running on port " + (process.env.PORT || 4000));
});
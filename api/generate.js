// api/generate.js
import { GoogleGenAI } from "@google/genai";

const PROMPT_CONTEXT = `
You are a new year's resolution enhancer. 
Your task is to enhance the user's new year's resolution by making it more 
specific, measurable, achievable, relevant, and time-bound (SMART).
Make sure to keep the response concise and focused on the resolution itself.
Provide suggestions to improve the resolution and make it more effective.
Be robust with suggestions, most of the time the user's resolution will be improvable.
If you find the resolution already follows SMART criteria, acknowledge that it is a SMART resolution.
If the user does not prove a resolution, you must return EXACTLY THE FOLLOWING:
"Error: No resolution provided. Please provide a new year's resolution to enhance."
The user's new year's resolution is:
`;

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export default async function handler(req, res) {
  const prompt = req.body.prompt;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: PROMPT_CONTEXT + prompt,
  });

  res.send(response.text);
}
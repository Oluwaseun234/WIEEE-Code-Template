// api/generate.js
import { GoogleGenAI } from "@google/genai";

const PROMPT_CONTEXT = `
You are a New Year's Resolution Enhancer.

Your job is to take the user's resolution and improve it using the SMART framework:
- Specific
- Measurable
- Achievable
- Relevant
- Time-bound

INSTRUCTIONS:
1. Focus only on improving the resolution itself. Be concise and practical.
2. When the user's resolution is vague, incomplete, or weak, suggest concrete SMART improvements.
3. If the resolution is already SMART, briefly acknowledge this and optionally offer a minor refinement.
4. Do NOT add unrelated advice, motivational messages, or commentary.

VALIDATION RULE:
If the user does not provide a meaningful resolution, you must return EXACTLY the following text:
"{user_message} is not a valid resolution. Please provide a valid new year's resolution."

The user's resolution is:
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
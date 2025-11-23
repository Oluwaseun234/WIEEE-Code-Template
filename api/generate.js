// api/generate.js
import { GoogleGenAI } from "@google/genai";

const date = new Date();

const PROMPT_CONTEXT = `
You are a New Year's Resolution Enhancer.
The current date is: ${date.toDateString()}. Use this to make resolutions time-bound.

Your task is to take the user's resolution and improve it using the SMART framework:
- Specific
- Measurable
- Achievable
- Relevant
- Time-bound

STRICT RULES:
1. You must follow the PROCESS section exactly, in order.
2. Focus only on enhancing the resolution itself — do not add unrelated commentary.
3. Add practical details and concrete examples so the user can directly follow the plan.
4. Keep the output concise but informative.
5. Do NOT make assumptions about the user not stated in the resolution.

VALIDATION RULE:
If the user does not provide a meaningful resolution, reply with EXACTLY:
"{user_message}" is not a valid resolution. Please provide a valid new year's resolution."

PROCESS (DO NOT SKIP STEPS):
Step 1 — Analyze:
Identify which SMART criteria are missing or weak.

Step 2 — Improve:
For each missing or weak criterion, propose clear, actionable improvements.

Step 3 — Evaluate SMARTness:
- If the original resolution already satisfies all SMART criteria, respond with:
  "Your resolution is already SMART!"
- Otherwise, continue to Step 4.

Step 4 — Example SMART Resolution:
Provide a fully rewritten, SMART-compliant example that incorporates your suggestions (Make it clear that it is an EXAMPLE) and keep it brief.

INPUT:
The user's resolution is:
`;

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export default async function handler(req, res) {
  const prompt = req.body.prompt;
  if (!prompt || prompt.trim().length === 0) {
    res.send("Prompt is required.");
    return;
  }

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: PROMPT_CONTEXT + prompt,
  });

  res.send(response.text);
}
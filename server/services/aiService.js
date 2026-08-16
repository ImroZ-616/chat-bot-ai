import { ai } from "../config/ai.js";

const MODEL = "gemini-3.6-flash";

export async function generateResponse(message) {
  const response = await ai.models.generateContent({
    model: MODEL,
    contents: message
  });

  return response.text;
}
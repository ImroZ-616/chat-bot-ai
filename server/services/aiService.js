import { ai } from "../config/ai.js";
import { getSystemPrompt } from "./promptService.js";

const MODEL = "gemini-3.6-flash";

export async function generateResponse(message, mode = "general") {
  const systemPrompt = getSystemPrompt(mode);

  const response = await ai.models.generateContent({
    model: MODEL,

    config: {
      systemInstruction: systemPrompt
    },

    contents: message
  });

  return response.text;
}
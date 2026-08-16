import { ai } from '../config/aiConfig.js';

export const generateChatResponse = async (message, history = [], persona = 'general') => {
  const systemPrompts = {
    general: "You are Chat AI Box, a concise and helpful AI assistant.",
    coder: "You are an expert software engineer. Provide clean, well-commented code snippets and direct explanations.",
    tutor: "You are an educational tutor. Explain concepts step-by-step using simple analogies."
  };

  const systemInstruction = systemPrompts[persona] || systemPrompts.general;

  // Format context history for the model
  const contents = [
    ...history.map(item => ({
      role: item.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: item.content }]
    })),
    {
      role: 'user',
      parts: [{ text: message }]
    }
  ];

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: contents,
    config: {
      systemInstruction: systemInstruction,
      temperature: 0.7,
    }
  });

  return response.text;
};
import { generateChatResponse } from '../services/chatService.js';

export const handleChatMessage = async (req, res) => {
  try {
    const { message, history, persona } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message string is required.' });
    }

    const reply = await generateChatResponse(message, history, persona);

    return res.status(200).json({
      success: true,
      reply: reply
    });
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ 
      error: 'Failed to process chat response from AI model.' 
    });
  }
};
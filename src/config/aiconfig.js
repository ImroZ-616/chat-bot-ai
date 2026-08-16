import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.GEMINI_API_KEY) {
  console.error("CRITICAL: GEMINI_API_KEY is missing in .env");
}

export const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
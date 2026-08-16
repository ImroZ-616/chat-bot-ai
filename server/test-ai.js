import { generateResponse } from "./services/aiService.js";

const response = await generateResponse(
  "Explain recursion in Python in two sentences."
);

console.log("\nGemini response:\n");
console.log(response);
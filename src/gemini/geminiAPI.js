import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the generative AI client.
const genAI = new GoogleGenerativeAI('AIzaSyAReInUKtjF8JKo-9bL5L-lx5tYq649Qms');

// Define the function to get the AI response.
export const getAIResponse = async (prompt) => {
// Get the generative model.
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

// Generate content based on the prompt.
    const result = await model.generateContent(prompt);

// Return the generated text.
    return result.response.text();
};
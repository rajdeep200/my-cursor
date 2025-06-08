const dotenv = require('dotenv')
dotenv.config();

const {GoogleGenerativeAI} = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

async function askGemini(prompt) {
    const result = await model.generateContent(prompt);
    return result.response.text();
}

module.exports = { askGemini };
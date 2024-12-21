const express = require("express");
const router = express.Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const fetchWebPageContent = require("../utils/fetchWebPageContent");
require("dotenv").config();

const genAI = new GoogleGenerativeAI({
    apiKey: process.env.GOOGLE_API_KEY
});

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash"
})

router.post("/summarize", async (req, res) => {
    try {
        const { url, text } = req.body;
        const contentToSummarize = text || await fetchWebPageContent(url);
        const prompt = `Summarize the following content: ${contentToSummarize}`;
        const response = await model.generateContent({ prompt, max_tokens: 100 });

        res.json({ summary: response.choices[0].text });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to generate summary" });
    }
})

module.exports = router;


const express = require("express");
const router = express.Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const fetchWebPageContent = require("../utils/fetchWebPageContent");
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash"
})

router.post("/summarize", async (req, res) => {
    try {
        const { url, text } = req.body;

        if (!url && !text) {
            return res.status(400).json({ error: "Either 'url' or 'text' is required." });
        }

        const contentToSummarize = text || await fetchWebPageContent(url);

        if (!contentToSummarize || typeof contentToSummarize !== "string") {
            throw new Error("Content to summarize is invalid or empty.");
        }

        const prompt = `Summarize the following content: ${contentToSummarize}`;
        // console.log("Prompt:", prompt);

        const result = await model.generateContent([prompt]);

        // console.log("Response:", result);

        res.json({ 
            summary: result.response.text() || "No summary generated." 
        });        
    } catch (error) {
        console.error("Error in summarization:", error);
        res.status(500).json({ error: "Failed to generate summary" });
    }
});


module.exports = router;


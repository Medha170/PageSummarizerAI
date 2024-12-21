const axios = require("axios");
const { JSDOM } = require("jsdom");

async function fetchWebPageContent(url) {
    try {
        const response = await axios.get(url);
        const dom = new JSDOM(response.data);
        const paragraphs = Array.from(dom.window.document.querySelectorAll("p"));
        return paragraphs.map((p) => p.textContent).join(" ");
    } catch (error) {
        console.error(`Error fetching webpage content: ${error.message}`);
        throw new Error("Failed to fetch webpage content.");
    }
}

module.exports = fetchWebPageContent;
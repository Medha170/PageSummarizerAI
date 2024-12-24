const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors({
    origin: "https://page-summarizer-ai.vercel.app/"
}));
app.use(bodyParser.json());

const summarizeRoutes = require("./routes/summarize");
app.use("/api", summarizeRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
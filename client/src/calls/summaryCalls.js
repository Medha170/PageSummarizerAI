const {axiosInstance} = require('./index');

export const createSummary = async (url) => {
    try {
        const response = await axiosInstance.post('/api/summarize', {url});
        console.log("Summary response:", response);
        return response.data.summary;
    } catch (error) {
        console.error("Error creating summary:", error);
        throw new Error("Failed to create summary.");
    }
}
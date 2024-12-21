import React, { useState } from 'react';
import { createSummary } from './../calls/summaryCalls';

const SummarizerForm = ({onSubmit}) => {
    const [url, setUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try{
            const summary = await createSummary(url);
            setLoading(false);
            onSubmit(summary);
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
    }

    return (
        <div>
            <h2>Summarize a Webpage</h2>
            <form onSubmit={handleSubmit}>
                <input
                type="url"
                placeholder="Enter URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
                />
                <button type="submit" disabled={loading}>
                {loading ? 'Summarizing...' : 'Summarize'}
                </button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    )
}

export default SummarizerForm;
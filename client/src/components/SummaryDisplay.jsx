import React from 'react';

const SummaryDisplay = ({ summary }) => {
  return (
    <div>
      <h2>Summary</h2>
      {summary ? <p>{summary}</p> : <p>No summary available.</p>}
    </div>
  );
};

export default SummaryDisplay;

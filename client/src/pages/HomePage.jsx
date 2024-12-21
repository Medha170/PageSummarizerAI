import React, { useState } from 'react';
import SummarizerForm from '../components/SummarizerForm';
import SummaryDisplay from '../components/SummaryDisplay';
import './../styles/App.css'

const HomePage = () => {
  const [summary, setSummary] = useState('');

  const handleSummarySubmit = (newSummary) => {
    setSummary(newSummary);
  };

  return (
    <div>
      <SummarizerForm onSubmit={handleSummarySubmit} />
      <SummaryDisplay summary={summary} />
    </div>
  );
};

export default HomePage;

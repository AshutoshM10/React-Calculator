import React from 'react';

function Results({ subjects, totalMarks, calculatePercentage, calculateCGPA }) {
  return (
    <div>
      <h2>Results</h2>
      <ul>
        {subjects.map((subject, index) => (
          <li key={index}>
            {subject.subject}: {subject.marks}
          </li>
        ))}
      </ul>
      <p>Total Marks Obtained: {totalMarks}</p>
      <button onClick={calculatePercentage}>Calculate Percentage</button>
      <button onClick={calculateCGPA}>Calculate CGPA</button>
    </div>
  );
}

export default Results;

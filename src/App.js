import React, { useState } from 'react';
import './styles.css'; // Import the styles.css file

function App() {
  const [numberOfSubjects, setNumberOfSubjects] = useState('');
  const [subjectMarks, setSubjectMarks] = useState([]);
  const [totalMarks, setTotalMarks] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [cgpa, setCGPA] = useState(0);

  const handleSubjectChange = (e) => {
    const count = parseInt(e.target.value, 10);
    if (count > 0) {
      setNumberOfSubjects(count);
      setSubjectMarks(new Array(count).fill(''));
      setTotalMarks(0);
      setPercentage(0);
      setCGPA(0);
    } else {
      setNumberOfSubjects('');
      setSubjectMarks([]);
      setTotalMarks(0);
      setPercentage(0);
      setCGPA(0);
    }
  };

  const handleMarkChange = (index, mark) => {
    const marks = [...subjectMarks];
    marks[index] = mark;
    setSubjectMarks(marks);
  };

  const calculatePercentage = () => {
    const totalMarksObtained = subjectMarks.reduce((acc, mark) => acc + parseInt(mark, 10), 0);
    setTotalMarks(totalMarksObtained);
    const percent = (totalMarksObtained / (numberOfSubjects * 100)) * 100;
    setPercentage(percent.toFixed(2));
  };

  const calculateCGPA = () => {
    const points = subjectMarks.map((mark) => {
      if (parseInt(mark, 10) >= 90) return 10;
      else if (parseInt(mark, 10) >= 80) return 9;
      else if (parseInt(mark, 10) >= 70) return 8;
      else if (parseInt(mark, 10) >= 60) return 7;
      else if (parseInt(mark, 10) >= 50) return 6;
      else if (parseInt(mark, 10) >= 40) return 5;
      else return 0;
    });

    const totalPoints = points.reduce((acc, point) => acc + point, 0);
    const cgpa = totalPoints / numberOfSubjects;
    setCGPA(cgpa.toFixed(2));
  };

  return (
    <div className="App">
      <h1>Marks Calculator</h1>
      <label>
        Number of Subjects:
        <input
          type="number"
          value={numberOfSubjects}
          onChange={handleSubjectChange}
          placeholder="Enter number of subjects"
        />
      </label>
      {numberOfSubjects !== '' && parseInt(numberOfSubjects, 10) > 0 && (
        <div>
          <h2>Enter Marks:</h2>
          {subjectMarks.map((mark, index) => (
            <div key={index}>
              Subject {index + 1}:{' '}
              <input
                type="number"
                value={mark}
                onChange={(e) => handleMarkChange(index, e.target.value)}
                placeholder="Enter marks"
              />
            </div>
          ))}
          <button className="button-instagram" onClick={calculatePercentage}>
            Calculate Percentage
          </button>
          <button className="button-instagram" onClick={calculateCGPA}>
            Calculate CGPA
          </button>
          <div className="google-search-box result">
            <div>Total Marks Obtained: {totalMarks} / {numberOfSubjects * 100}</div>
            <div>Percentage: {percentage}%</div>
            <div>CGPA: {cgpa}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

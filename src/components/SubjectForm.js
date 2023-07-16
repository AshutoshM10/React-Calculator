import React, { useState } from 'react';

function SubjectForm({ onAddSubject }) {
  const [subject, setSubject] = useState('');
  const [marks, setMarks] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (subject && marks) {
      const newSubject = { subject, marks: Number(marks) };
      onAddSubject(newSubject);
      setSubject('');
      setMarks('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter marks"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default SubjectForm;

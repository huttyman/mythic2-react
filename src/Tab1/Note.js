import React, { useState, useEffect } from 'react';

const Note = () => {
  const [note, setNote] = useState('');

  useEffect(() => {
    const savedNote = localStorage.getItem('note');
    if (savedNote) {
      setNote(savedNote);
    }
  }, []);

  const handleChange = (event) => {
    setNote(event.target.value);
  };

  useEffect(() => {
    localStorage.setItem('note', note);
  }, [note]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">NOTE</h2>
      <textarea
        value={note}
        onChange={handleChange}
        className="border border-gray-300 p-2 mt-2 w-full h-48 resize-none"
      ></textarea>
    </div>
  );
};

export default Note;

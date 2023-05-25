import React, { useState, useEffect } from 'react';

const ThreatList = () => {
  const [inputs, setInputs] = useState(() => {
    const savedInputs = localStorage.getItem('threatListInputs');
    return savedInputs ? JSON.parse(savedInputs) : Array(15).fill('');
  });
  const [selectedInput, setSelectedInput] = useState('');

  useEffect(() => {
    localStorage.setItem('threatListInputs', JSON.stringify(inputs));
  }, [inputs]);

  const handleButtonClick = () => {
    // Filter non-empty inputs
    const nonEmptyInputs = inputs.filter(input => input.trim() !== '');

    // Select a random input from the non-empty inputs
    const randomInput = nonEmptyInputs[Math.floor(Math.random() * nonEmptyInputs.length)];

    setSelectedInput(randomInput);
  };

  const handleInputChange = (index, value) => {
    const updatedInputs = [...inputs];
    updatedInputs[index] = value;
    setInputs(updatedInputs);
  };

  return (
    <div>
      <h2>THREAT LIST</h2>

      <button className="bg-green-500 text-white px-2 py-1 rounded text-sm" onClick={handleButtonClick}>
        Select Threat
      </button>

      <ul>
        {inputs.map((input, index) => (
          <li key={index}>
            <input
              type="text"
              value={input}
              onChange={e => handleInputChange(index, e.target.value)}
              className="border border-black"
            />
          </li>
        ))}
      </ul>

      {selectedInput && <p>Selected Threat: {selectedInput}</p>}
    </div>
  );
};

export default ThreatList;

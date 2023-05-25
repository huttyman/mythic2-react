import React, { useState } from 'react';

const ExpectedScene = ({ chaosFactor }) => {
  const [result, setResult] = useState('');
  const [diceRoll, setDiceRoll] = useState(0);

  const handleRoll = () => {
    const diceRoll = Math.floor(Math.random() * 10) + 1;
    setDiceRoll(diceRoll);
    if (diceRoll > chaosFactor) {
      setResult('Expected Result');
    } else if (diceRoll % 2 === 0) {
      setResult('Interrupt Scene');
    } else {
      setResult('Altered Scene');
    }
  };

  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-xl font-bold mb-4">Expected Scene</h2>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={handleRoll}
      >
        Roll d10
      </button>
      {result && (
        
        <p className="mt-4">

          ChaosFactor: <span className="font-bold">{chaosFactor}</span> <br />
          Result: <span className="font-bold">{`(${diceRoll})`}{result}</span>
        </p>
      )}
    </div>
  );
};

export default ExpectedScene;

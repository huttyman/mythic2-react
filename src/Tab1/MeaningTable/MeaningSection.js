import React, { useState } from 'react';

const MeaningSection = ({ buttonText, setTopic, itemList1, itemList2, setResult,setDetailVisible }) => {
  // const [result, setResult] = useState([]);
  // const [detailVisible, setDetailVisible] = useState(false);

  const handleButtonClick = () => {
    const randomItems = getRandomItems();
    setResult(randomItems);
    setDetailVisible(true);
    setTopic(buttonText);
  };

  const getRandomItems = () => {
    const randomIndexes = [];
    while (randomIndexes.length < 2) {
      const randomIndex = Math.floor(Math.random() * itemList1.length);
      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
      }
    }
    return [itemList1[randomIndexes[0]], itemList2[randomIndexes[1]]];
  };

  return (
    <div className="mt-4">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleButtonClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default MeaningSection;

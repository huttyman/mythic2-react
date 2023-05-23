import React, { useState } from 'react';

const RandomSection = ({ title, buttonText, detailText, itemList,setDetail,setResult,setDetailVisible }) => {
  // const [result, setResult] = useState([]);
  // const [detailVisible, setDetailVisible] = useState(false);

  const handleButtonClick = () => {
    const randomItems = getRandomItems();
    setResult(randomItems);
    setDetail(detailText);
    setDetailVisible(true);
  };

  const getRandomItems = () => {
    const randomIndexes = [];
    while (randomIndexes.length < 2) {
      const randomIndex = Math.floor(Math.random() * itemList.length);
      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
      }
    }
    return [itemList[randomIndexes[0]], itemList[randomIndexes[1]]];
  };

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleButtonClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default RandomSection;

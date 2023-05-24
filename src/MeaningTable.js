import React from 'react';

import { useState } from 'react';
import MeaningSection from './MeaningSection';
import { sections } from "./utils/MeaningElementDetail";

  
const MeaningTable = () => {

  const [result, setResult] = useState([]);
  const [topic, setTopic] = useState('');
  const [detailVisible, setDetailVisible] = useState(false);
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">MEANING TABLE</h2>
      {/* Add the table contents here */}

      <div className="flex flex-wrap justify-center space-x-5">
            {sections.map((section, index) => (
                <MeaningSection
                    key={index}
                    buttonText={section.buttonText}
                    detailText={section.detailText}
                    itemList1={section.itemList1}
                    itemList2={section.itemList2}
                    setResult={setResult}
                    setTopic={setTopic}
                    setDetailVisible={setDetailVisible}
                />
                ))}
        </div>
        {detailVisible && (
            <div className="mt-4">
                <div>
                <h3 className="text-xl font-bold">{topic}</h3>
                <p>{result[0]}</p>
                <p>{result[1]}</p>
                </div>
            </div>
        )}
    </div>
  );
}

export default MeaningTable;
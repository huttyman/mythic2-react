import React from 'react';

import { useState } from 'react';
import RandomSection from './RandomSection';
import { sections } from "../utils/RamdomDetail";

  
const ElementsTable = () => {

  const [result, setResult] = useState([]);
  const [detail, setDetail] = useState('');
  const [topic, setTopic] = useState('');
  const [detailVisible, setDetailVisible] = useState(false);
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">ELEMENTS MEANING TABLES AT A GLANCE</h2>
      {/* Add the table contents here */}

      <div className="flex flex-wrap justify-center space-x-5">
            {sections.map((section, index) => (
                <RandomSection
                    key={index}
                    buttonText={section.buttonText}
                    detailText={section.detailText}
                    itemList={section.itemList}
                    setDetail={setDetail}
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
            <h3 className="text-xl font-bold">Detail:</h3>
                <p>
                {detail}
                </p>
            </div>
        )}
    </div>
  );
}

export default ElementsTable;
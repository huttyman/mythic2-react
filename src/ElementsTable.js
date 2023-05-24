import React from 'react';

import { useState } from 'react';
import RandomSection from './RandomSection';
import { sections } from "./utils/RamdomDetail";

  
const ElementsTable = () => {

  const [result, setResult] = useState([]);
  const [detail, setDetail] = useState('');
  const [detailVisible, setDetailVisible] = useState(false);
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">ELEMENTS MEANING TABLES AT A GLANCE</h2>
      {/* Add the table contents here */}

        <div className="flex flex-col items-center justify-center h-screen">
            {sections.map((section, index) => (
                <RandomSection
                    key={index}
                    buttonText={section.buttonText}
                    detailText={section.detailText}
                    itemList={section.itemList}
                    setDetail={setDetail}
                    setResult={setResult}
                    setDetailVisible={setDetailVisible}
                />
                ))}
        </div>
        {detailVisible && (
            <div className="mt-4">
                <div>
                <h3 className="text-xl font-bold">Result:</h3>
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
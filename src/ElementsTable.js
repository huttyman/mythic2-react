import React from 'react';
import RandomSection from './RandomSection';

const adventureToneList = [
  "a1",
  "a2",
    "a3",
    "a4",
    "a5"
];

const alienDescriptorList = [
  "alient1",
    "alient2",
    "alient3",
    "alient4",
    "alient5"
];

const ElementsTable = () => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">ELEMENTS MEANING TABLES AT A GLANCE</h2>
      {/* Add the table contents here */}

        <div className="flex flex-col items-center justify-center h-screen">
        <RandomSection
            title="ELEMENTS MEANING TABLES AT A GLANCE"
            buttonText="Adventure Tone"
            detailText="If you’re constructing an adventure in advance and want some help from Mythic, you can use the Adventure Tone Elements Table to guide you. You’re constructing a fantasy adventure and want to determine the overall tone. A few rolls on the Adventure Tone Elements Table give us the selected tones. You may interpret this to mean..."
            itemList={adventureToneList}
        />
        <RandomSection
            title="ALIEN SPECIES DESCRIPTORS"
            buttonText="Alien Species Descriptors"
            detailText="This is meant for sci-fi adventures that feature aliens on distant worlds. The table is biased toward intelligent species, the kind found in a functioning civilization."
            itemList={alienDescriptorList}
        />
        </div>
    </div>
  );
}

export default ElementsTable;
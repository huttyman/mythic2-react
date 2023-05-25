import React from 'react';
import ThreatList from './ThreatList';
import CharacterList from './CharacterList'

const AdventureList = () => {
  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-xl font-bold mb-4">ADVENTURE LIST</h2>
      {/* Add your adventure list content here */}

      <div className="flex flex-wrap">
        
        <div className="w-full sm:w-1/2">
          <ThreatList />
        </div>
        <div className="w-full sm:w-1/2">
          <CharacterList />
        </div>
      </div>
    </div>
  );
}

export default AdventureList;

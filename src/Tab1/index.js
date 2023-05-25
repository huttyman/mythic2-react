import React from 'react';

import { useState } from 'react';
import ElementsTable from './ElementTable/ElementsTable';
import MeaningTable from './MeaningTable/MeaningTable';
import AdventureList from './AdventureList/AdventureList';
import ExpectedScene from './ExpectedScene';
import ChaosFactor from './ChaosFactor';
import Note from './Note';
import ClearLocalStorageButton from './ClearLocalStorageButton';


const Tab1 = () => {

    const [mainChaosFactor, setMainChaosFactor] = useState(5);
    

  return (
    <div className="App">
      <ChaosFactor
        setMainChaosFactor={setMainChaosFactor}
      />
      <MeaningTable/>
      <ExpectedScene chaosFactor={mainChaosFactor}/>
      <Note/>
      <AdventureList/>
      <ElementsTable/>
      <ClearLocalStorageButton/>
    </div>
  );
}

export default Tab1;
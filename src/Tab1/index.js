import React from 'react';

import { useState } from 'react';
import ElementsTable from './ElementsTable';
import MeaningTable from './MeaningTable';
import AdventureList from './AdventureList/AdventureList';
import ExpectedScene from './ExpectedScene';
import ChaosFactor from './ChaosFactor';


const Tab1 = () => {

    const [mainChaosFactor, setMainChaosFactor] = useState(5);
    

  return (
    <div className="App">
      <ChaosFactor
        setMainChaosFactor={setMainChaosFactor}
      />
      <MeaningTable/>
      <ExpectedScene chaosFactor={mainChaosFactor}/>
      <AdventureList/>
      <ElementsTable/>
    </div>
  );
}

export default Tab1;
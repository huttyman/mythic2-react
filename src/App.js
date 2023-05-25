import logo from './logo.svg';
import './App.css';

/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, React} from 'react';

import ElementsTable from './ElementsTable';
import MeaningTable from './MeaningTable';
import AdventureList from './AdventureList/AdventureList';
import ExpectedScene from './ExpectedScene';
import ChaosFactor from './ChaosFactor';

function App() {

  const [mainChaosFactor, setMainChaosFactor] = useState(0);
  
  return (
    <div className="App">
      <ChaosFactor/>
      <MeaningTable/>
      <ExpectedScene chaosFactor={mainChaosFactor}/>
      <AdventureList/>
      <ElementsTable/>
    </div>
  );
}

export default App;


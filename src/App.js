import logo from './logo.svg';
import './App.css';

/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';

import { Probability } from './utils/Probability';

function App() {

  const [chaosFactor, setChaosFactor] = useState(5);
  const [result, setResult] = useState('');

  const handleClick = (probability) => {
    const { exn, y, exy } = Probability[probability][chaosFactor];
    const roll = Math.ceil(Math.random() * 100);

    const isDoubleDigit = roll % 11 === 0 && roll !== 0;
    const digit = roll%10
    console.log('isDoubleDigit', isDoubleDigit)
    console.log('digit', digit)
    let randomEvent = '';

    if (isDoubleDigit && digit <= chaosFactor) {
      console.log('getRandome Event')
      randomEvent = ` \n(Random Event: ${getRandomEvent()})`;
    }

    if (roll < exn) {
      setResult(`Exceptional No (${roll})${randomEvent}`);
    } else if (roll < y) {
      setResult(`No (${roll})${randomEvent}`);
    } else if (roll < exy) {
      setResult(`Yes (${roll})${randomEvent}`);
    } else {
      setResult(`Exceptional Yes (${roll})${randomEvent}`);
    }
  };

  console.log('test', Probability.impossible[1].exy);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div className="container mx-auto p-4">
        <div className="mb-4">
          <label
            htmlFor="chaosFactor"
            className="block text-sm font-medium text-gray-700"
          >
            Chaos Factor
          </label>
          <select
            id="chaosFactor"
            value={chaosFactor}
            onChange={(e) => setChaosFactor(e.target.value)}
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          >
            {Array.from({ length: 9 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          {Object.keys(Probability).map((key) => (
            <button
              key={key}
              onClick={() => handleClick(key)}
              className="mr-2 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            >
              {key}
            </button>
          ))}
        </div>
        {result && <div className="text-lg font-semibold">{result}</div>}
      </div>
    </div>
  );
}

export default App;


const getRandomEvent = () => {
  const events = [
    { min: 1, max: 5, name: 'Remote Event', detail: "A Remote Event means that something has happened that your Character wasn’t present for; they’re only learning about it now. This can happen in many ways. \nMaybe the Player Character encounters the dead body of an NPC they met earlier in the adventure, and the Remote Event is this Character’s death, which the PC did not directly witness. Or maybe the PC wanders into a tavern and learns by word of mouth that the enemy horde has advanced, destroying the next town down the road.\nRemote Events are a way of introducing new twists into an adventure without the PC being directly involved with them." },
    { min: 6, max: 10, name: 'Ambiguous Event', detail: 'An event with unclear consequences happens.' },
    { min: 11, max: 20, name: 'New NPC', detail: 'A new non-player character is introduced.' },
    { min: 21, max: 40, name: 'NPC Action', detail: 'An NPC takes an action that affects the story.' },
    { min: 41, max: 45, name: 'NPC Negative', detail: 'An NPC experiences a negative event.' },
    { min: 46, max: 50, name: 'NPC Positive', detail: 'An NPC experiences a positive event.' },
    { min: 51, max: 55, name: 'Move Toward A Thread', detail: 'The story moves closer to a thread.' },
    { min: 56, max: 65, name: 'Move Away From A Thread', detail: 'The story moves away from a thread.' },
    { min: 66, max: 70, name: 'Close A Thread', detail: 'A story thread is resolved or abandoned.' },
    { min: 71, max: 80, name: 'PC Negative', detail: 'The player character experiences a negative event.' },
    { min: 81, max: 85, name: 'PC Positive', detail: 'The player character experiences a positive event.' },
    { min: 86, max: 100, name: 'Current Context', detail: 'An event occurs related to the current context.' },
  ];

  const roll = Math.ceil(Math.random() * 100);

  const event = events.find((event) => roll >= event.min && roll <= event.max);

  return `${event.name} \n(${event.detail})`;
};
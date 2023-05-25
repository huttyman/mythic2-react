import logo from './logo.svg';
import './App.css';

/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, React} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Tab1 from './Tab1';
import Tab2 from './Tab2';

function App() {
  return (
    <Router>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Mythic 2e App</h1>
        <nav className="mb-4">
          <ul className="flex">
            <li className="mr-4">
              
            <Link
                to="/"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Main</Link>
            </li>
            <li>
            <Link
                to="/tab2"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >Adventure Note</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Tab1 />} />
          <Route path="/tab2" element={<Tab2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


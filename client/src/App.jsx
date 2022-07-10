import React, { useState, useEffect } from 'react';
import { NavBar } from './components/navbar';
import { Gallery } from './components/gallery';
import logo from './logo.svg';
import './App.css';

function App() {
  const [library, setLibrary] = useState([]);

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setLibrary(data));
  });

  return (
    <div className="App">
      <NavBar />
      <Gallery library={library} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
          and save to reload.
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
    </div>
  );
}

export default App;

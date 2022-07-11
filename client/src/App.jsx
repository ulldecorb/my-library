import React, { useState, useEffect } from 'react';
// import { NavBar } from './components/navbar';
import { Gallery } from './components/gallery';
import './App.css';

function App() {
  const [library, setLibrary] = useState(null);

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setLibrary(data));
  }, []);

  return (
    <div className="App">
      {/* <NavBar /> */}
      <Gallery library={library} />
    </div>
  );
}

export default App;

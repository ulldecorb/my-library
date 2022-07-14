import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { NavBar } from './components/navbar';
import { Gallery } from './components/gallery';
import { AddBook } from './components/addBook';
import { Detail } from './components/detail';
import './App.css';

function App() {
  const [library, setLibrary] = useState(null);
  const getLibrary = () => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setLibrary(data));
  };

  useEffect(() => {
    getLibrary();
  }, []);

  useEffect(() => {
    getLibrary();
  });

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <Gallery library={library} />
              }
          />
          <Route
            path="/addbook"
            element={
              <AddBook />
            }
          />
          <Route
            path="/update/:bookId"
            element={
              <Detail />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

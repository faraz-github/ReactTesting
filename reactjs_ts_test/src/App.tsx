import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Application } from './components/application/application';

// Testing Playground Extension
// Testing playground extension can be found in google play store 
// With the help of this extension we can find relevant query from the preview page itself
// Simply install the extension > open the page ? open developers tools > select the element in page > switch to testing playground tab 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Application />
      </header>
    </div>
  );
}

export default App;

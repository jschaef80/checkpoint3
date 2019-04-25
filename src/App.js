import React from 'react';
import './App.css';
import InputBox from "./InputBox";
import SportsList from './SportsList';
import Map from './Map';


function App() {
  return (
    <div className="App">
      <div className="side-panel">
          <h2>Shred Finder</h2>
          <InputBox />
          <div className="sports-list-box">
          <SportsList />
          </div>
      </div>
      <div className="map-box">
        <Map />
      </div>
    </div>
  );
}

export default App;

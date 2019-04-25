import React from 'react';
import './App.css';
import InputBox from "./InputBox";
import SportsList from './SportsList';
import Map from './Map';


function App() {
  return (
    <div className="App">
      <div className="side-panel">
          <h2>Shred finder</h2>
          <InputBox />
          <div className="result-box">
          <SportsList />
          {/* Each list item should be an individual highlightable box with Sport name. */}
          </div>
      </div>
      <div className="map-box">
        <Map />
      </div>
    </div>
  );
}

export default App;

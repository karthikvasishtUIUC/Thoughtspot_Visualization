import React from 'react';
import PieChart from './Piechart.js';
import BarChart from './Barchart.js';
import ThoughtSpotLiveboard from './Thoughtspot.js';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>Bank Account Overview</h1>
      <div className="chart-container pie-chart">
        <PieChart />
      </div>
      <div className="chart-container bar-chart">
        <BarChart />
      </div>
      <ThoughtSpotLiveboard />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';
import ChartContainer from './components/ChartContainer/chartContainer';
import SideManu from './components/SideManu/sideManu';
import CSVreader from './components/CSVreader/csvReader';


function App() {

  const [openManu, setOpenManu] = useState(false);

  return (
    <div className="app-container">
      <div className={openManu ? "app-sideManu-open" : "app-sideManu-shrinked"}>
        <SideManu openManu={openManu} setOpenManu={setOpenManu} />
      </div>
      <div className="app-body-container">
        <CSVreader isOpen={openManu} />
        <Navbar setOpenManu={setOpenManu} />
        <div className="app-body-topInfo-container">
        </div>
        <ChartContainer />
      </div>
    </div >
  );
}

export default App;

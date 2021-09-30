import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';
import TableFrame from './components/TableFrame/tableFrame';
import SideManu from './components/SideManu/sideManu';
import CSVreader from './components/CSVreader/csvReader';


function App() {

  const [openManu, setOpenManu] = useState(false);

  return (
    <div className="appContainer">
      <div className={openManu ? "openSideManu" : "shrinkedSideManu"}>
        <SideManu openManu={openManu} setOpenManu={setOpenManu} />
      </div>
      <div className="appBodyContainer">
        <CSVreader isOpen={openManu} />
        <Navbar setOpenManu={setOpenManu} />
        <div className="mainInfoContainer">
        </div>
        <TableFrame />
      </div>
    </div >
  );
}

export default App;

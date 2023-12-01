import './App.css';
import { Routes, Route } from "react-router-dom"
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Grid from "./Components/Grid";
import Charts from "./Components/Charts";
import { useState } from 'react';


function App() {
const [dataAgg,setDataAgg] = useState();

const getDataFromNav = (value) => {
  setDataAgg(value);
  console.log("lets: ",value);
}

  return (
    <div className="main">

      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="nav">
        <div className="navbar">
          <Navbar passData = {getDataFromNav} />
        </div>

        <div className="Charts">
          <Charts data={dataAgg} />
        </div>

        <div className="grid">
          <Grid data={dataAgg} />
          </div>
  <div>

          <Routes>            
            <Route path='/Grid'  element={(<Grid />)} />           
            <Route path='/Charts'  element={(<Charts />)} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import Navbar from './components/NabBar';
import Malbec from './Pages/malbec';
import Chardonnay from './Pages/chardonnay';
import Syrah from './Pages/syrah';
import Cabernet from './Pages/cabernet';
import Home from './Pages/Home';
import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";


function App() {
 
  return (
    <div id="root">
      <Browser>
        <Navbar /> 
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/malbec" element={<Malbec />} />
            <Route exact path="/cabernet" element={<Cabernet />} />
            <Route exact path="/syrah" element={<Syrah />} />
            <Route exact path="/chardonnay" element={<Chardonnay />} />            
          </Routes>
      </Browser>
    </div>
    
  );
}

export default App;

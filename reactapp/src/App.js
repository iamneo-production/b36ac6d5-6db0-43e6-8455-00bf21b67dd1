import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar style={{marignLeft:'50px'}}/>
      </BrowserRouter>
    </div>
  );
};

export default App;
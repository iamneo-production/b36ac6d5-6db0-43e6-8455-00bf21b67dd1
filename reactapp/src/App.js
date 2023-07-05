import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import CustomerManagement from "./components/Customer/CustomerManagement";


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar style={{marignLeft:'50px'}}/>
      <Routes>
      <Route path="customers">
              <Route index element={<CustomerManagement />}/>

            </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
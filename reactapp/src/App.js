import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import CustomerManagement from "./components/Customer/CustomerManagement";
import LeadManagement from "./components/Leads/LeadManagement";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar style={{marignLeft:'50px'}}/>
      <Routes>
      <Route path="customers">
              <Route index element={<CustomerManagement />}/>

            </Route>
      <Route path="leads">
            <Route index element={<LeadManagement />}/>

          </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
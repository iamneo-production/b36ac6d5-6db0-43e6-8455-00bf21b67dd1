import React from 'react';
<<<<<<< HEAD
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
=======
import CustomerManagement from './Pages/Customer/CustomerManagement';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <CustomerManagement />
      </main>
>>>>>>> 15ec89a972e7faddf6f4372294e6205f8c205cd1
    </div>
  );
};

export default App;
import React from 'react';
import LeadManagement from './Pages/Lead/LeadManagement';
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerTable from "./Pages/Customer/CustomerTable";
import TaskManagement from "./Pages/Task/TaskManagement";


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar style={{marignLeft:'50px'}}/>
      <Routes>
        <Route path="customers">
              <Route index element={<CustomerTable />}/>

            </Route>
        <Route path="leads">
              <Route index element={<LeadManagement />}/>

            </Route>
        <Route path="Tasks">
              <Route index element={<TaskManagement />}/>

            </Route>
      </Routes>
      </BrowserRouter>
    </div>

  );
};

export default App;

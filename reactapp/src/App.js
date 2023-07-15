import React from 'react';
import LeadManagement from './Pages/Lead/LeadManagement';
import SideBar from './components/Sidebar';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerTable from "./Pages/Customer/CustomerTable";
import TaskManagement from "./Pages/Task/TaskManagement";


const App = () => {
  return (
    <div>
      <BrowserRouter>
      
      <SideBar>
        <Routes>
          <Route path="/customer" element={<CustomerTable />} />
          <Route path="/task" element={<TaskManagement />} />
          <Route path="/lead" element={<LeadManagement />} />
          <Route path="*" element={<>Not found</>} />
        </Routes>
      </SideBar>
      </BrowserRouter>
    </div>

  );
};

export default App;

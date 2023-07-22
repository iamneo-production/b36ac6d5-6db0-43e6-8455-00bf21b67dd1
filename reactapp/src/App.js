<<<<<<< HEAD
import React from 'react';
import LeadManagement from './Pages/Lead/LeadManagement';
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerTable from "./Pages/Customer/CustomerTable";



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
      </Routes>
      </BrowserRouter>
    </div>

=======
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./components/Sidebar";
import LeadManagement from "./Pages/Lead/LeadManagement";
import Dashboard from "./components/Dashboard";
import TaskManagement from "./Pages/Task/TaskManagement";
import CustomerManagement from "./Pages/Customer/CustomerManagement";

function App() {
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/customer" element={<CustomerManagement />} />
          <Route path="/task" element={<TaskManagement />} />
          <Route path="/lead" element={<LeadManagement />} />
        </Routes>
      </SideBar>
    </Router>
>>>>>>> af37fb4ba5e22131cdfe567e92a26ffa22de54c1
  );
}

export default App;

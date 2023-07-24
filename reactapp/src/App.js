import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./components/Sidebar";
import LeadManagement from "./Pages/Lead/LeadManagement";
import TaskManagement from "./Pages/Task/TaskManagement";
import CustomerManagement from "./Pages/Customer/CustomerManagement";
import TicketManagement from "./Pages/Ticket/TicketManagement";

function App() {
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/customer" element={<CustomerManagement />} />
          <Route path="/task" element={<TaskManagement />} />
          <Route path="/lead" element={<LeadManagement />} />
          <Route path="/ticket" element={<TicketManagement />} />

        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;

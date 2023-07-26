import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./components/Sidebar";
import LeadManagement from "./Pages/Lead/LeadManagement";
import Dashboard from "./components/Dashboard";
import TaskManagement from "./Pages/Task/TaskManagement";
import CustomerManagement from "./Pages/Customer/CustomerManagement";
import OpportunityDetails from "./Pages/Opportunity/OpportunityDetails";
import OpportunityPipeline from "./Pages/Opportunity/OpportunityPipeline";
import TicketManagement from "./Pages/Ticket/TicketManagement";

function App() {
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/customer" element={<CustomerManagement />} />
          <Route path="/task" element={<TaskManagement />} />
          <Route path="/lead" element={<LeadManagement />} />
          <Route path="/oppo" element={<OpportunityPipeline />} />
          <Route path="/opportunity/:id" element={<OpportunityDetails />} />
          <Route path="/ticket" element={<TicketManagement />} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;

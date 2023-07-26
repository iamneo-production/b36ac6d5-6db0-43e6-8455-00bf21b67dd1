import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./components/Sidebar";
import LeadManagement from "./Pages/Lead/LeadManagement";
import Dashboard from "./components/Dashboard";
import TaskManagement from "./Pages/Task/TaskManagement";
import CustomerManagement from "./Pages/Customer/CustomerManagement";
<<<<<<< HEAD
=======
import OpportunityDetails from "./Pages/Opportunity/OpportunityDetails";
import OpportunityPipeline from "./Pages/Opportunity/OpportunityPipeline";
>>>>>>> 12b8c64d86025c7f46edb92879398829c69ee108
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
<<<<<<< HEAD
          <Route path="/ticket" element={<TicketManagement />} />

=======
          <Route path="/oppo" element={<OpportunityPipeline />} />
          <Route path="/opportunity/:id" element={<OpportunityDetails />} />
          <Route path="/ticket" element={<TicketManagement />} />
>>>>>>> 12b8c64d86025c7f46edb92879398829c69ee108
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;

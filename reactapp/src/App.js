import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./components/Sidebar";
import OpportunityManagement from "./Pages/Opportunity/OpportunityManagement";
import LeadManagement from "./Pages/Lead/LeadManagement";
import TicketManagement from "./Pages/Ticket/TicketManagement";
import TaskManagement from "./Pages/Task/TaskManagement";
import SaleManagement from "./Pages/Sale/SaleManagement";
import CustomerManagement from "./Pages/Customer/CustomerManagement";
import DashboardManagement from "./Pages/Dashboard/DashboardManagement";
import EmailManagement from "./Pages/Email/EmailManagement";

function App() {
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<DashboardManagement />} />
          <Route path="/customer" element={<CustomerManagement />} />
          <Route path="/sale" element={<SaleManagement />} />
          <Route path="/task" element={<TaskManagement />} />
          <Route path="/ticket" element={<TicketManagement />} />
          <Route path="/lead" element={<LeadManagement />} />
          <Route path="/opportunity" element={<OpportunityManagement />} />
          <Route path="/email" element={<EmailManagement />} />
          <Route path="*" element={<>Not found</>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;

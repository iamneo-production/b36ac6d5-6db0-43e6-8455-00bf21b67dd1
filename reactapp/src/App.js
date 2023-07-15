import React from 'react';
import CustomerManagement from './Pages/Customer/CustomerManagement';
import LeadManagement from './Pages/Lead/LeadManagement';
import OpportunityManagement from './Pages/Opportunity/OpportunityManagement';
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <CustomerManagement />
        <LeadManagement />
        <OpportunityManagement />
      </main>
    </div>
  );
};

export default App;

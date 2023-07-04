import React from 'react';
import CustomerTable from './Pages/Customer/CustomerTable';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Customer Management System</h1>
      </header>
      <main>
        <CustomerTable />
      </main>
    </div>
  );
};

export default App;

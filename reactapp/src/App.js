import React from 'react';
import LeadManagement from './Pages/Lead/LeadManagement';
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerTable from "./Pages/Customer/CustomerTable";



const App = () => {
  return (
    // <div className="App">
    //   <header className="App-header">
    //   </header>
    //   <main>
    //   <Navbar style={{marignLeft:'50px'}}/>
    //     <LeadManagement />
    //   </main>
    // </div>
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

  );
};

export default App;

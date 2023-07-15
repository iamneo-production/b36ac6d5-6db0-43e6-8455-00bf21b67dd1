import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      {isSidebarOpen && (
        <ul className="sidebar__menu">
          <li className="sidebar__item">
            <NavLink to="/customer-management" className="sidebar__link" activeClassName="active">
              Customer Management
            </NavLink>
          </li>
          <li className="sidebar__item">
            <NavLink to="/lead-management" className="sidebar__link" activeClassName="active">
              Lead Management
            </NavLink>
          </li>
          <li className="sidebar__item">
            <NavLink to="/opportunity-management" className="sidebar__link" activeClassName="active">
              Opportunity Management
            </NavLink>
          </li>
        </ul>
      )}
      <button className="sidebar__toggle-btn" onClick={toggleSidebar}>
        {isSidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}
      </button>
    </div>
  );
};

export default Sidebar;

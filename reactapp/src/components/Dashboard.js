import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faAddressBook, faHandshake, faMoneyBillWave, faTasks, faTicketAlt } from '@fortawesome/free-solid-svg-icons';
import "./Dashboard.css";

const BASE_URL = 'https://8080-bffdfbaeafafcfcbeaefdbdfaeaeaadbdbabf.project.examly.io';

 const Dashboard = () => {
  const [customerCount, setCustomerCount] = useState(0);
  const [leadCount, setLeadCount] = useState(0);
  const [opportunityCount, setOpportunityCount] = useState(0);
  const [saleCount, setSaleCount] = useState(0);
  const [taskCount, setTaskCount] = useState(0);
  const [ticketCount, setTicketCount] = useState(0);
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCustomerCount();
    fetchLeadCount();
    fetchOpportunityCount();
    fetchSaleCount();
    fetchTaskCount();
    fetchTicketCount();
    fetchCustomers();
  }, []);

  const fetchCustomerCount = () => {
    fetch(`${BASE_URL}/customer/count`)
      .then(response => response.json())
      .then(data => {
        setCustomerCount(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching customer count:", error);
        setLoading(false);
      });
  };


  const fetchLeadCount = () => {
    fetch(`${BASE_URL}/lead/count`)
      .then(response => response.json())
      .then(data => {
        setLeadCount(data);
        setLoading(false); 
      })
      .catch(error => {
        console.error("Error fetching lead count:", error);
        setLoading(false); 
      });
  };

  const fetchOpportunityCount = () => {
    fetch(`${BASE_URL}/opportunities/count`)
      .then(response => response.json())
      .then(data => {
        setOpportunityCount(data);
        setLoading(false); 
      })
      .catch(error => {
        console.error("Error fetching lead count:", error);
        setLoading(false); 
      });
  };


  const fetchSaleCount = () => {
    fetch(`${BASE_URL}/sales/count`)
      .then(response => response.json())
      .then(data => {
        setSaleCount(data);
        setLoading(false); 
      })
      .catch(error => {
        console.error("Error fetching lead count:", error);
        setLoading(false); 
      });
  };


  const fetchTaskCount = () => {
    fetch(`${BASE_URL}/task/count`)
      .then(response => response.json())
      .then(data => {
        setTaskCount(data);
        setLoading(false); 
      })
      .catch(error => {
        console.error("Error fetching lead count:", error);
        setLoading(false); 
      });
  };


  const fetchTicketCount = () => {
    fetch(`${BASE_URL}/ticket/count`)
      .then(response => response.json())
      .then(data => {
        setTicketCount(data);
        setLoading(false); 
      })
      .catch(error => {
        console.error("Error fetching lead count:", error);
        setLoading(false); 
      });
  };

  
  const fetchCustomers = () => {
    fetch(`${BASE_URL}/customer`)
      .then(response => response.json())
      .then(data => {
        setCustomers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching customers:", error);
        setLoading(false);
      });
  };  

  return (
    <div className="dashboard-container">
      <div className="navigations">
        <Link to="/customer">
          <div className="dashboard-tile">
            <div className="dashboard-tile-icon">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="dashboard-tile-title">Total Customers</div>
            <div className="dashboard-tile-value">{loading ? "Loading..." : customerCount}</div>
          </div>
        </Link>
        <Link to="/lead">
          <div className="dashboard-tile">
            <div className="dashboard-tile-icon">
              <FontAwesomeIcon icon={faAddressBook} />
            </div>
            <div className="dashboard-tile-title">Total Leads</div>
            <div className="dashboard-tile-value">{loading ? "Loading..." : leadCount}</div>
          </div>
        </Link>
        <Link to="/oppo">
          <div className="dashboard-tile">
            <div className="dashboard-tile-icon">
              <FontAwesomeIcon icon={faHandshake} />
            </div>
            <div className="dashboard-tile-title">Total Opportunities</div>
            <div className="dashboard-tile-value">{loading ? "Loading..." : opportunityCount}</div>
          </div>
        </Link>
        <Link to="/sale">
          <div className="dashboard-tile">
            <div className="dashboard-tile-icon">
              <FontAwesomeIcon icon={faMoneyBillWave} />
            </div>
            <div className="dashboard-tile-title">Total Sales</div>
            <div className="dashboard-tile-value">{loading ? "Loading..." : saleCount}</div>
          </div>
        </Link>
        <Link to="/task">
          <div className="dashboard-tile">
            <div className="dashboard-tile-icon">
              <FontAwesomeIcon icon={faTasks} />
            </div>
            <div className="dashboard-tile-title">Total Tasks</div>
            <div className="dashboard-tile-value">{loading ? "Loading..." : taskCount}</div>
          </div>
        </Link>
        <Link to="/ticket">
          <div className="dashboard-tile">
            <div className="dashboard-tile-icon">
              <FontAwesomeIcon icon={faTicketAlt} />
            </div>
            <div className="dashboard-tile-title">Total Tickets</div>
            <div className="dashboard-tile-value">{loading ? "Loading..." : ticketCount}</div>
          </div>
        </Link>
      </div>
      <div style={{ 
        maxWidth: '400px', /* Adjust this value to set the desired width */
        margin: '0',
        overflowX: 'auto'
      }}>
      <div className="table-container">
        <table className="table table-striped" style={{ overflowX: "auto"}} >
          <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {customers.map(customer => (
                <tr key={customer.id}>
                  <td>{customer.id}</td>
                  <td>{customer.name}</td>
                  <td>{customer.email}</td>
                  <td>{customer.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

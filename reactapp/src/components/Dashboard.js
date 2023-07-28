import React from "react";
import { Link } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faAddressBook, faHandshake, faMoneyBillWave, faTasks, faTicketAlt } from '@fortawesome/free-solid-svg-icons';
import "./Dashboard.css";

const Dashboard = () => {
  // Replace these values with the actual data for your line chart
  // Sample data for Line Chart
  const data = [
    { month: 'Jan', customers: 100, tasks: 50, leads: 75, opportunities: 30, tickets: 20, sales: 3000 },
    { month: 'Feb', customers: 150, tasks: 60, leads: 90, opportunities: 35, tickets: 25, sales: 4500 },
    { month: 'Mar', customers: 200, tasks: 80, leads: 120, opportunities: 40, tickets: 30, sales: 6000 },
    { month: 'Apr', customers: 180, tasks: 70, leads: 100, opportunities: 25, tickets: 15, sales: 4200 },
    { month: 'May', customers: 220, tasks: 90, leads: 150, opportunities: 50, tickets: 40, sales: 8000 },
    // Add more data points here...
  ];
  const initialData = data[0];
  const normalizedData = data.map((item) => {
    return {
      month: item.month,
      customers: ((item.customers - initialData.customers) / initialData.customers) * 100,
      tasks: ((item.tasks - initialData.tasks) / initialData.tasks) * 100,
      leads: ((item.leads - initialData.leads) / initialData.leads) * 100,
      opportunities: ((item.opportunities - initialData.opportunities) / initialData.opportunities) * 100,
      sales: ((item.sales - initialData.sales) / initialData.sales) * 100,
      tickets: ((item.tickets - initialData.tickets) / initialData.tickets) * 100,
      // Store the original values for each data point
      original: item,
    };
  });

  // Custom tooltip formatter function to display original values
  const tooltipFormatter = (value, name, entry) => {
    if (name === 'month') {
      return value; // Return the month as it is
    } else {
      // For other data keys, display both normalized and original values
      return [`${name}`, `${entry.payload.original[name]}`];
    }
  };
  

// Sample data for Progress Bar
  const progressData = [
    { label: 'Customers', value: 70 },
    { label: 'Leads', value: 40 },
    { label: 'Opportunity', value: 60 },
    { label: 'Sales', value: 25 },
    { label: 'Tasks', value: 90 },
    { label: 'Tickets', value: 50 },
  ];
// Sample data for Timeline


  // Colors for the pie chart
  const COLORS = ['#8884d8', '#ffc658', '#ff7300', '#aa00ff', '#82ca9d', '#00ffaa'];


  return (
    <div className="dashboard-container">
      <div className="navigations">
        <Link to="/customer">
          <div className="dashboard-tile">
            <div className="dashboard-tile-icon">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="dashboard-tile-title">Total Customers</div>
            <div className="dashboard-tile-value">{data[data.length - 1].customers}</div>

          </div>
        </Link>
        <Link to="/lead">
          <div className="dashboard-tile">
            <div className="dashboard-tile-icon">
              <FontAwesomeIcon icon={faAddressBook} />
            </div>
            <div className="dashboard-tile-title">Total Leads</div>
            <div className="dashboard-tile-value">{data[data.length - 1].leads}</div>
          </div>
        </Link>
        <Link to="/oppo">
          <div className="dashboard-tile">
            <div className="dashboard-tile-icon">
              <FontAwesomeIcon icon={faHandshake} />
            </div>
            <div className="dashboard-tile-title">Total Opportunities</div>
            <div className="dashboard-tile-value">{data[data.length - 1].opportunities}</div>
          </div>
        </Link>
        <Link to="/sale">
          <div className="dashboard-tile">
            <div className="dashboard-tile-icon">
              <FontAwesomeIcon icon={faMoneyBillWave} />
            </div>
            <div className="dashboard-tile-title">Total Sales</div>
            <div className="dashboard-tile-value">{data[data.length - 1].sales}</div>
          </div>
        </Link>
        <Link to="/task">
          <div className="dashboard-tile">
            <div className="dashboard-tile-icon">
              <FontAwesomeIcon icon={faTasks} />
            </div>
            <div className="dashboard-tile-title">Total Tasks</div>
            <div className="dashboard-tile-value">{data[data.length - 1].tasks}</div>
          </div>
        </Link>
        <Link to="/ticket">
          <div className="dashboard-tile">
            <div className="dashboard-tile-icon">
              <FontAwesomeIcon icon={faTicketAlt} />
            </div>
            <div className="dashboard-tile-title">Total Tickets</div>
            <div className="dashboard-tile-value">{data[data.length - 1].tickets}</div>
          </div>
        </Link>
      </div>
      <div className="progress-bar-container">
        {progressData.map((item, index) => (
          <div key={index} className="progress-bar">
            <div className="progress-bar-label">{item.label}</div>
            <div className="progress-bar-wrapper">
              <PieChart width={160} height={160}>
                <Pie
                  data={[{ name: 'progress', value: item.value }, { name: 'remaining', value: 100 - item.value }]}
                  dataKey="value"
                  outerRadius={80}
                  innerRadius={15}
                  startAngle={90}
                  endAngle={-270}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </div>
            <div className="progress-bar-value">{item.value}%</div>
          </div>
        ))}
      </div>
      <div className="line-chart-container position-absolute">
        <LineChart width={600} height={400} data={normalizedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip formatter={tooltipFormatter} />
          <Legend />
          <Line type="monotone" dataKey="customers" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="tasks" stroke="#82ca9d" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="leads" stroke="#ffc658" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="opportunities" stroke="#ff7300" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="sales" stroke="#aa00ff" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="tickets" stroke="#00ffaa" activeDot={{ r: 8 }} />
        </LineChart>
      </div>
    </div>
  );
};

export default Dashboard;

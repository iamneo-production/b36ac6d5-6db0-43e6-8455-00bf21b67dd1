import React from 'react';
import { Link } from 'react-router-dom';


const opportunityDetailsData = [
  { id: 1, name: 'Opportunity A', stage: 'Stage A', value: 1000, close_date: '2023-07-31', notes: 'Lorem ipsum dolor sit amet' },
  { id: 2, name: 'Opportunity B', stage: 'Stage B', value: 2500, close_date: '2023-08-15', notes: 'Consectetur adipiscing elit' },
  { id: 3, name: 'Opportunity C', stage: 'Stage C', value: 1800, close_date: '2023-08-20', notes: 'Sed do eiusmod tempor incididunt' },
  { id: 4, name: 'Opportunity D', stage: 'Stage D', value: 3500, close_date: '2023-09-10', notes: 'Ut labore et dolore magna aliqua' },
  { id: 5, name: 'Opportunity E', stage: 'Stage E', value: 5000, close_date: '2023-09-25', notes: 'Ut enim ad minim veniam' },
  { id: 6, name: 'Opportunity F', stage: 'Stage F', value: 7500, close_date: '2023-10-05', notes: 'Quis nostrud exercitation ullamco' },
  { id: 7, name: 'Opportunity G', stage: 'Stage G', value: 2000, close_date: '2023-10-15', notes: 'Excepteur sint occaecat cupidatat non proident' },
  { id: 8, name: 'Opportunity H', stage: 'Stage H', value: 1200, close_date: '2023-11-05', notes: 'Sunt in culpa qui officia deserunt' },
  { id: 9, name: 'Opportunity I', stage: 'Stage A', value: 3000, close_date: '2023-11-15', notes: 'Mollit anim id est laborum' },
  { id: 10, name: 'Opportunity J', stage: 'Stage B', value: 4000, close_date: '2023-12-01', notes: 'Duis aute irure dolor in reprehenderit' },
  /* Add more examples here */
];



const OpportunityDetails = () => {
  return (
    <div className="opportunity-details-container">
      <h2>Opportunity Details</h2>
      {/* Back button with ArrowBack icon */}
      <Link to="/oppo" className="back-button">
        <i className="fas fa-arrow-left"></i> Back
      </Link>
      <div className="table-container">
        <table className="table table-striped">
        <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Stage</th>
              <th>Value</th>
              <th>Close Date</th>
              <th>Notes</th>
            </tr>
          </thead>

          <tbody>
            {opportunityDetailsData.map(opportunity => (
              <tr key={opportunity.id}>
                <td>{opportunity.id}</td>
                <td>{opportunity.name}</td>
                <td>{opportunity.stage}</td>
                <td>${opportunity.value}</td>
                <td>{opportunity.close_date}</td>
                <td>{opportunity.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OpportunityDetails;

import React from 'react';
import { Link } from 'react-router-dom';
// import './OpportunityPipeline.css';

const opportunityData = [
  { id: 1, stage: 'New' },
  { id: 2, stage: 'Contacted' },
  { id: 3, stage: 'Needs Analysis' },
  { id: 4, stage: 'Proposal' },
  { id: 5, stage: 'Negotiation' },
  { id: 6, stage: 'Won' },
  { id: 7, stage: 'Lost' },
  { id: 8, stage: 'On Hold' },
  { id: 9, stage: 'Cancelled' },
];

const opportunityPipelineData = [
  { id: 1, name: 'Opportunity A', stage: 'New' },
  { id: 2, name: 'Opportunity B', stage: 'Contacted' },
  { id: 3, name: 'Opportunity C', stage: 'Needs Analysis' },
  { id: 4, name: 'Opportunity D', stage: 'Proposal' },
  { id: 5, name: 'Opportunity E', stage: 'Negotiation' },
  { id: 6, name: 'Opportunity F', stage: 'Won' },
  { id: 7, name: 'Opportunity G', stage: 'Lost' },
  { id: 8, name: 'Opportunity H', stage: 'On Hold' },
  { id: 9, name: 'Opportunity I', stage: 'Cancelled' },
  { id: 10, name: 'Opportunity J', stage: 'New' },
  /* Add more examples here */
];

const OpportunityPipeline = () => {
  return (
    <div className="opportunity-pipeline-container">
      <h2>Opportunity Pipeline</h2>
      <div className="table-container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              {opportunityData.map((opportunity) => (
                <th key={opportunity.id}>{opportunity.stage}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {opportunityPipelineData.map((opportunity) => (
              <tr key={opportunity.id}>
                <td>{opportunity.id}</td>
                {opportunityData.map((stage) => (
                  <td key={stage.id}>
                    {opportunity.stage === stage.stage ? (
                      <Link to={`/opportunity/${opportunity.id}`}>{opportunity.name}</Link>
                    ) : (
                      ''
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default OpportunityPipeline;
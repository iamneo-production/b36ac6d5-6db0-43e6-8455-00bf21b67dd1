import React, { useState } from 'react';
import './UpdateOpportunity.css';

const UpdateOpportunity = ({ opportunity, onUpdate, onCancel }) => {
  const [name, setName] = useState(opportunity.name);
  const [customerId, setCustomerId] = useState(opportunity.customer_id);
  const [status, setStatus] = useState(opportunity.status);
  const [value, setValue] = useState(opportunity.value);
  const [closeDate, setCloseDate] = useState(opportunity.close_date);
  const [notes, setNotes] = useState(opportunity.notes);

  const handleUpdate = () => {
    const updatedOpportunity = {
      id: opportunity.id,
      name,
      customer_id: customerId,
      status,
      value,
      close_date: closeDate,
      notes
    };

    onUpdate(updatedOpportunity);
  };

  return (
    <div className="update-opportunity-container">
      <h2>Edit Opportunity ID: {opportunity.id}</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="customerId">Customer ID:</label>
        <input type="text" id="customerId" value={customerId} onChange={(e) => setCustomerId(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="status">Status:</label>
        <input type="text" id="status" value={status} onChange={(e) => setStatus(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="value">Value:</label>
        <input type="text" id="value" value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="closeDate">Close Date:</label>
        <input type="text" id="closeDate" value={closeDate} onChange={(e) => setCloseDate(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="notes">Notes:</label>
        <textarea id="notes" value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>
      </div>
      <div className="button-group">
        <button className="update-button" onClick={handleUpdate}>
          Update
        </button>
        <button className="cancel-button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default UpdateOpportunity;

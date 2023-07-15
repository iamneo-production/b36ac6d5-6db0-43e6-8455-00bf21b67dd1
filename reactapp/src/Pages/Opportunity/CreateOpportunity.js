import React, { useState } from 'react';
import './CreateOpportunity.css';

const CreateOpportunity = ({ onCreate, onCancel }) => {
  const [name, setName] = useState('');
  const [customerId, setCustomerId] = useState('');
  const [status, setStatus] = useState('');
  const [value, setValue] = useState('');
  const [closeDate, setCloseDate] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOpportunity = {
      name,
      customer_id: customerId,
      status,
      value,
      close_date: closeDate,
      notes
    };
    onCreate(newOpportunity);
    setName('');
    setCustomerId('');
    setStatus('');
    setValue('');
    setCloseDate('');
    setNotes('');
  };

  return (
    <div className="create-opportunity-container">
      <h3>Create Opportunity</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="customerId" className="form-label">
            Customer ID
          </label>
          <input
            type="text"
            className="form-control"
            id="customerId"
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="status" className="form-label">
            Status
          </label>
          <input
            type="text"
            className="form-control"
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="value" className="form-label">
            Value
          </label>
          <input
            type="text"
            className="form-control"
            id="value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="closeDate" className="form-label">
            Close Date
          </label>
          <input
            type="text"
            className="form-control"
            id="closeDate"
            value={closeDate}
            onChange={(e) => setCloseDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="notes" className="form-label">
            Notes
          </label>
          <textarea
            className="form-control"
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>
        </div>
        <div className="button-group">
          <button type="submit" className="btn btn-primary me-2">
            Create
          </button>
          <button type="button" className="btn btn-secondary" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateOpportunity;

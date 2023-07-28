import React, { useState } from 'react';
import './CreateTicket.css';

const CreateTicket = ({ onCreate, onCancel }) => {
  const [customerId, setCustomerId] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [updatedAt, setUpdatedAt] = useState('');
  
  const handleCustomerIdChange = (e) => {
    const value = e.target.value;
    const numericValue = Number(value)
      setCustomerId(numericValue);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleAssignedToChange = (e) => {
    setAssignedTo(e.target.value);
  };

  const handleCreatedAtChange = (e) => {
    setCreatedAt(e.target.value);
  };

  const handleUpdatedAtChange = (e) => {
    setUpdatedAt(e.target.value);
  };

  const formatDate = (date) => {
    const [year, month, day] = date.split('-');
    return `${year}-${month}-${day}`;
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTicket = {
      customer: {   
        id: customerId,  
      },
      subject: subject,
      description: description,
      status: status,
      assignedTo: assignedTo,
      createdAt: createdAt + "T10:00:00",
      updatedAt: updatedAt + "T10:00:00",
    };
    
    onCreate(newTicket);
    setCustomerId('');
    setSubject('');
    setDescription('');
    setStatus('');
    setAssignedTo('');
    setCreatedAt('');
    setUpdatedAt('');
  };

  return (
    <div className="create-task-container">
      <h3>Create Ticket</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="customerId" className="form-label">
            Customer ID
          </label>
          <input
            type="text"
            className="form-control"
            id="customerId"
            value={customerId}
            onChange={handleCustomerIdChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject" className="form-label">
            Subject
          </label>
          <input
            type="text"
            className="form-control"
            id="subject"
            value={subject}
            onChange={handleSubjectChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="status" className="form-label">
            Status
          </label>
          <select
            className="form-control"
            id="status"
            value={status}
            onChange={handleStatusChange}
          >
            <option value="">Select Status</option>
            <option value="Active">Active</option>
            <option value="Pending">Pending</option>
            <option value="Passive">Passive</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="assignedTo" className="form-label">
            Assigned To
          </label>
          <input
            type="text"
            className="form-control"
            id="assignedTo"
            value={assignedTo}
            onChange={handleAssignedToChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="createdAt" className="form-label">
            Created At
          </label>
          <input
            type="date"
            className="form-control"
            id="createdAt"
            value={createdAt ? formatDate(createdAt) : ''}
            onChange={handleCreatedAtChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="updatedAt" className="form-label">
            Updated At
          </label>
          <input
            type="date"
            className="form-control"
            id="updatedAt"
            value={updatedAt ? formatDate(updatedAt) : ''}
            onChange={handleUpdatedAtChange}
          />
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

export default CreateTicket;

import React, { useState } from 'react';
import './UpdateTicket.css';

const UpdateTicket = ({ ticket, onUpdate, onCancel }) => {
  const [customerId, setCustomerId] = useState(ticket.customer_id);
  const [subject, setSubject] = useState(ticket.subject);
  const [description, setDescription] = useState(ticket.description);
  const [status, setStatus] = useState(ticket.status);
  const [assignedTo, setAssignedTo] = useState(ticket.assigned_to);
  const [createdAt, setCreatedAt] = useState(ticket.created_at);
  const [updatedAt, setUpdatedAt] = useState(ticket.updated_at);

  
  const handleUpdate = () => {
    const updatedTicket = {
       id: ticket.id,
       customer: {   
        id: customerId,  
      },
      "subject": subject,
      "description": description,
      "status": status,
      "assignedTo": assignedTo,
      "createdAt":createdAt + "T10:00:00" ,
      "updatedAt":updatedAt + "T10:00:00"
    };

    onUpdate(updatedTicket);
  };

  
  const handleCustomerIdChange = (e) => {
    setCustomerId(e.target.value);
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


  return (
    <div className="update-ticket-container">
      <h2>Update Ticket ID: {ticket.id}</h2>
      <div className="form-group">
        <label htmlFor="CustomerId">Customer ID:</label>
        <input type="text" id="customerId" value={customerId} onChange={handleCustomerIdChange} />
      </div>
      <div className="form-group">
        <label htmlFor="subject">Subject:</label>
        <input type="text" id="subject" value={subject} onChange={handleSubjectChange} />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <input type="text" id="description" value={description} onChange={handleDescriptionChange} />
      </div>
      <div className="form-group">
        <label htmlFor="status">status:</label>
        <select id="status" value={status} onChange={handleStatusChange}>
          <option value="">Select Status</option>
          <option value="Active">Active</option>
          <option value="Pending">Pending</option>
          <option value="Passive">Passive</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="assignedTo">Assigned To:</label>
        <input type="text" id="assignedTo" value={assignedTo} onChange={handleAssignedToChange} />
      </div>
      <div className="form-group">
        <label htmlFor="CreatedAt">Created At:</label>
        <input type="date" id="createdAt" value={createdAt} onChange={handleCreatedAtChange} />
      </div>
      <div className="form-group">
        <label htmlFor="UpdatedAt">Updated At:</label>
        <input type="date" id="updatedAt" value={updatedAt} onChange={handleUpdatedAtChange} />
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

export default UpdateTicket;

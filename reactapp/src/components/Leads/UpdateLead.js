import React, { useState } from 'react';
import './UpdateLead.css';

const UpdateLead = ({ lead, onUpdate, onCancel }) => {
  const [name, setName] = useState(lead.name);
  const [email, setEmail] = useState(lead.email);
  const [phone, setPhone] = useState(lead.phone);
  const [source, setSource] = useState(lead.source);
  const [status, setStatus] = useState(lead.status);
  const [notes, setNotes] = useState(lead.notes);

  const handleUpdate = () => {
    const updatedLead = {
      id: lead.id,
      name,
      email,
      phone,
      source,
      status,
      notes,
    };

    onUpdate(updatedLead);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSourceChange = (e) => {
    setSource(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  return (
    <div className="update-lead-container">
      <h2>Update Lead ID: {lead.id}</h2> {/* Displaying the lead ID */}
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" value={email} onChange={handleEmailChange} />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone:</label>
        <input type="text" id="phone" value={phone} onChange={handlePhoneChange} />
      </div>
      <div className="form-group">
        <label htmlFor="source">Source:</label>
        <input type="text" id="source" value={source} onChange={handleSourceChange} />
      </div>
      <div className="form-group">
        <label htmlFor="status">Status:</label>
        <select id="status" value={status} onChange={handleStatusChange}>
          <option value="">Select Status</option>
          <option value="Active">Active</option>
          <option value="Pending">Pending</option>
          <option value="Passive">Passive</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="notes">Notes:</label>
        <input type="text" id="notes" value={notes} onChange={handleNotesChange} />
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

export default UpdateLead;
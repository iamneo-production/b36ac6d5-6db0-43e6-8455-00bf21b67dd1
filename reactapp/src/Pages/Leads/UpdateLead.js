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

  return (
    <div className="update-lead-container">
      <h2>Update Lead</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone:</label>
        <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="source">Source:</label>
        <input type="text" id="source" value={source} onChange={(e) => setSource(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="status">Status:</label>
        <input type="text" id="source" value={status} onChange={(e) => setStatus(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="notes">Notes:</label>
        <input type="text" id="notes" value={notes} onChange={(e) => setNotes(e.target.value)} />
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

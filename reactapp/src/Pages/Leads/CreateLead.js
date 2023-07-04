import React, { useState } from 'react';
import './CreateLead.css';

const CreateLead = ({ onCreate, onCancel }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [source, setSource] = useState('');
  const [status, setStatus] = useState('');
  const [notes, setNotes] = useState('');

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLead = {
      name,
      email,
      phone,
      source,
      status,
      notes,
    };
    onCreate(newLead);
    setName('');
    setEmail('');
    setPhone('');
    setSource('');
    setStatus('');
    setNotes('');
  };

  return (
    <div className="create-lead-container">
      <h3>Create Lead</h3>
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
            onChange={handleNameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            value={phone}
            onChange={handlePhoneChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="source" className="form-label">
            Source
          </label>
          <input
            type="text"
            className="form-control"
            id="source"
            value={source}
            onChange={handleSourceChange}
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
            onChange={handleStatusChange}
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
            onChange={handleNotesChange}
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

export default CreateLead;

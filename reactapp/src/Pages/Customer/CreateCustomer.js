import React, { useState } from 'react';
import './CreateCustomer.css';

const CreateCustomer = ({ onCreate, onCancel }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [communicationHistory, setCommunicationHistory] = useState('');
  const [purchaseHistory, setPurchaseHistory] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleCommunicationHistoryChange = (e) => {
    setCommunicationHistory(e.target.value);
  };

  const handlePurchaseHistoryChange = (e) => {
    setPurchaseHistory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCustomer = {
      name,
      email,
      phone,
      address,
      communicationHistory: communicationHistory.split(',').map((item) => item.trim()),
      purchaseHistory: purchaseHistory.split(',').map((item) => item.trim()),
    };
    onCreate(newCustomer);
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setCommunicationHistory('');
    setPurchaseHistory('');
  };

  return (
    <div className="create-customer-container">
      <h3>Create Customer</h3>
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
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <textarea
            className="form-control"
            id="address"
            value={address}
            onChange={handleAddressChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="communicationHistory" className="form-label">
            Communication History (comma-separated)
          </label>
          <input
            type="text"
            className="form-control"
            id="communicationHistory"
            value={communicationHistory}
            onChange={handleCommunicationHistoryChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="purchaseHistory" className="form-label">
            Purchase History (comma-separated)
          </label>
          <input
            type="text"
            className="form-control"
            id="purchaseHistory"
            value={purchaseHistory}
            onChange={handlePurchaseHistoryChange}
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

export default CreateCustomer;
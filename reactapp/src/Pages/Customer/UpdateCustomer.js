import React, { useState } from 'react';
import './UpdateCustomer.css';

const UpdateCustomer = ({ customer, onUpdate, onCancel }) => {
  const [name, setName] = useState(customer.name);
  const [email, setEmail] = useState(customer.email);
  const [phone, setPhone] = useState(customer.phone);
  const [address, setAddress] = useState(customer.address);
  const [communicationHistory, setCommunicationHistory] = useState(
    customer.communicationHistory.join(', ')
  );
  const [purchaseHistory, setPurchaseHistory] = useState(customer.purchaseHistory.join(', '));

  const handleUpdate = () => {
    const updatedCustomer = {
      id: customer.id,
      name,
      email,
      phone,
      address,
      communicationHistory: communicationHistory.split(',').map((item) => item.trim()),
      purchaseHistory: purchaseHistory.split(',').map((item) => item.trim()),
    };

    onUpdate(updatedCustomer);
  };

  return (
    <div className="update-customer-container">
      <h2>Update Customer</h2>
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
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="communicationHistory">Communication History:</label>
        <input
          type="text"
          id="communicationHistory"
          value={communicationHistory}
          onChange={(e) => setCommunicationHistory(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="purchaseHistory">Purchase History:</label>
        <input
          type="text"
          id="purchaseHistory"
          value={purchaseHistory}
          onChange={(e) => setPurchaseHistory(e.target.value)}
        />
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

export default UpdateCustomer;

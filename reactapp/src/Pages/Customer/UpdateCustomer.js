import React, { useState } from 'react';

const UpdateCustomer = ({ customer, onUpdate }) => {
  const [name, setName] = useState(customer.name);
  const [email, setEmail] = useState(customer.email);
  const [phone, setPhone] = useState(customer.phone);
  const [address, setAddress] = useState(customer.address);
  const [communicationHistory, setCommunicationHistory] = useState(customer.communicationHistory.join(', '));
  const [purchaseHistory, setPurchaseHistory] = useState(customer.purchaseHistory.join(', '));

  const handleUpdate = () => {
    const updatedCustomer = {
      id: customer.id,
      name,
      email,
      phone,
      address,
      communicationHistory: communicationHistory.split(',').map(item => item.trim()),
      purchaseHistory: purchaseHistory.split(',').map(item => item.trim()),
    };

    onUpdate(updatedCustomer);
  };

  return (
    <div>
      <h2>Update Customer</h2>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Phone:</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div>
        <label>Address:</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>
      <div>
        <label>Communication History:</label>
        <input type="text" value={communicationHistory} onChange={(e) => setCommunicationHistory(e.target.value)} />
      </div>
      <div>
        <label>Purchase History:</label>
        <input type="text" value={purchaseHistory} onChange={(e) => setPurchaseHistory(e.target.value)} />
      </div>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UpdateCustomer;

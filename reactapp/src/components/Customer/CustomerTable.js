import React, { useEffect, useState } from 'react';
import CreateCustomer from './CreateCustomer';
import UpdateCustomer from './UpdateCustomer';
import SearchCustomer from './SearchCustomer'; // Add this import statement
import "./CustomerTable.css"

const BASE_URL = 'https://8080-bffdfbaeafafcfcbeaefdbdfaeaeaadbdbabf.project.examly.io/customers';

const CustomerTable = () => {
  const [customers, setCustomers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = () => {
    setLoading(true);
    fetch(BASE_URL)
      .then(response => response.json())
      .then(data => setCustomers(data))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  };

  const handleSearchChange = e => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    setLoading(true);
    fetch(`${BASE_URL}/${searchQuery}`)
      .then(response => response.json())
      .then(data => {
        if (data) {
          setCustomers([data]);
        } else {
          setCustomers([]);
        }
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  };

  const handleDelete = (customerId) => {
    setLoading(true);
    fetch(`${BASE_URL}/${customerId}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => {
        if (data.deleted) {
          fetchCustomers(); // Refresh the customer list
        }
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  };

  const handleEdit = (customer) => {
    setSelectedCustomer(customer);
  };

  const handleUpdate = (updatedCustomer) => {
    setLoading(true);
    fetch(`${BASE_URL}/${updatedCustomer.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedCustomer),
    })
      .then(response => response.json())
      .then(data => {
        if (data.id) {
          fetchCustomers(); // Refresh the customer list
          setSelectedCustomer(null);
        }
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  };

  const handleCreate = (newCustomer) => {
    setLoading(true);
    fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCustomer),
    })
      .then(response => response.json())
      .then(data => {
        if (data) {
          fetchCustomers(); // Refresh the customer list
          setShowCreateForm(false);
        }
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  };

  const handleCloseForm = () => {
    setSelectedCustomer(null);
    setShowCreateForm(false);
  };

  return (
    <div >
      <h2 style={{textAlign:"center"}}>Customers</h2>
      <div>
      <div style={{display:"flex",justifyContent:"flex-end"}}>
        <SearchCustomer 
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          onSearch={handleSearch}
        />
        </div>
        <div  style={{display:"flex",justifyContent:"flex-end"}}>
        <button onClick={() => setShowCreateForm(true)} >Create Customer</button>
        </div>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="table-container">
        <table className="table" align="center">
          <thead >
            <tr>
              <th className='heading'>ID</th>
              <th  className='heading'>Name</th>
              <th  className='heading'>Email</th>
              <th  className='heading'>Phone</th>
              <th  className='heading'>Address</th>
              <th  className='heading'>Communication History</th>
              <th  className='heading'>Purchase History</th>
              <th  className='heading'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map(customer => (
              <tr key={customer.id}>
                <td className='heading'>{customer.id}</td>
                <td className='heading'>{customer.name}</td>
                <td className='heading'>{customer.email}</td>
                <td className='heading'>{customer.phone}</td>
                <td className='heading'>{customer.address}</td>
                <td className='heading'>{customer.communicationHistory.join(', ')}</td>
                <td className='heading'>{customer.purchaseHistory.join(', ')}</td>
                <td>
                  <button onClick={() => handleEdit(customer)}>Edit</button>
                  <button onClick={() => handleDelete(customer.id)}>Delete</button>
                </td>
              </tr>
            ))}
            
          </tbody>
        </table>
        </div>
      )}

      {showCreateForm && (
        <div align="center">
          <CreateCustomer onCreate={handleCreate} />
          <button onClick={handleCloseForm}>Cancel</button>
        </div>
      )}

      {selectedCustomer && (
        <div align="center">
          <UpdateCustomer customer={selectedCustomer} onUpdate={handleUpdate}/>
          <button onClick={handleCloseForm}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default CustomerTable;
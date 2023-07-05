import React, { useEffect, useState } from 'react';
import CreateCustomer from './CreateCustomer';
import UpdateCustomer from './UpdateCustomer';
import SearchCustomer from './SearchCustomer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CustomerTable.css';

const BASE_URL = 'https://8080-bffdfbaeafafcfcbeaefdbdfaeaeaadbdbabf.project.examly.io/customers';

const CustomerTable = () => {
  const [customers, setCustomers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [isCreating, setIsCreating] = useState(false);

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

  const handleDelete = customerId => {
    setLoading(true);
    fetch(`${BASE_URL}/${customerId}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        if (data.deleted) {
          fetchCustomers();
        }
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  };

  const handleEdit = customer => {
    setSelectedCustomer(customer);
  };

  const handleUpdate = updatedCustomer => {
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
          fetchCustomers();
          setSelectedCustomer(null);
        }
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  };

  const handleCreate = newCustomer => {
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
          fetchCustomers();
          setIsCreating(false);
        }
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  };

  const handleCloseForm = () => {
    setSelectedCustomer(null);
    setIsCreating(false);
  };

  const handleShowCreateForm = () => {
    setIsCreating(true);
  };

  return (
    <div className="container">
      <h2>Customers</h2>
      <div className="mb-3">
        <SearchCustomer searchQuery={searchQuery} onSearchChange={handleSearchChange} onSearch={handleSearch} />
        <button className="btn btn-primary" onClick={handleShowCreateForm}>
          Create Customer
        </button>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Communication History</th>
              <th>Purchase History</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map(customer => (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
                <td>{customer.address}</td>
                <td>{customer.communicationHistory.join(', ')}</td>
                <td>{customer.purchaseHistory.join(', ')}</td>
                <td>
                  <button className="btn btn-primary btn-sm" onClick={() => handleEdit(customer)}>
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(customer.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {isCreating && (
        <div className="popup-form">
          <CreateCustomer onCreate={handleCreate} onCancel={handleCloseForm} />
        </div>
      )}

      {selectedCustomer && (
        <div className="popup-form">
          <UpdateCustomer customer={selectedCustomer} onUpdate={handleUpdate} onCancel={handleCloseForm} />
        </div>
      )}
    </div>
  );
};

export default CustomerTable;

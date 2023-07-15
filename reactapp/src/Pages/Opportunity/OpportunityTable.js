import React, { useEffect, useState } from 'react';
import CreateOpportunity from './CreateOpportunity';
import UpdateOpportunity from './UpdateOpportunity';
import SearchOpportunity from './SearchOpportunity';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './OpportunityTable.css';

const BASE_URL = 'https://8080-deefbdbabebcdbfcfcbeaefdbdfaeaeaadbdbabf.project.examly.io/opportunity';

const OpportunityTable = () => {
  const [opportunities, setOpportunities] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);

  useEffect(() => {
    fetchOpportunities();
  }, []);

  const fetchOpportunities = () => {
    setLoading(true);
    fetch(BASE_URL)
      .then(response => response.json())
      .then(data => setOpportunities(data))
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
          setOpportunities([data]);
        } else {
          setOpportunities([]);
        }
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  };

  const handleDelete = opportunityId => {
    setLoading(true);
    fetch(`${BASE_URL}/${opportunityId}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        if (data.deleted) {
          fetchOpportunities();
        }
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  };

  const handleEdit = opportunity => {
    setSelectedOpportunity(opportunity);
  };

  const handleUpdate = updatedOpportunity => {
    setLoading(true);
    fetch(`${BASE_URL}/${updatedOpportunity.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedOpportunity),
    })
      .then(response => response.json())
      .then(data => {
        if (data.id) {
          fetchOpportunities();
          setSelectedOpportunity(null);
        }
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  };

  const handleCreate = newOpportunity => {
    setLoading(true);
    fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newOpportunity),
    })
      .then(response => response.json())
      .then(data => {
        if (data) {
          fetchOpportunities();
          setShowCreateForm(false);
        }
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  };

  const handleCloseForm = () => {
    setSelectedOpportunity(null);
    setShowCreateForm(false);
  };

  return (
    <div className="container">
      <h2>Opportunities</h2>
      <div className="mb-3">
        <SearchOpportunity
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          onSearch={handleSearch}
        />
        <button className="btn btn-primary" onClick={() => setShowCreateForm(true)}>
          Create Opportunity
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
              <th>Customer ID</th>
              <th>Status</th>
              <th>Value</th>
              <th>Close Date</th>
              <th>Notes</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {opportunities.map(opportunity => (
              <tr key={opportunity.id}>
                <td>{opportunity.id}</td>
                <td>{opportunity.name}</td>
                <td>{opportunity.customer_id}</td>
                <td>{opportunity.status}</td>
                <td>{opportunity.value}</td>
                <td>{opportunity.close_date}</td>
                <td>{opportunity.notes}</td>
                <td>
                  <button className="btn btn-primary btn-sm" onClick={() => handleEdit(opportunity)}>
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(opportunity.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {showCreateForm && (
        <div className="popup-form">
          <CreateOpportunity onCreate={handleCreate} onCancel={handleCloseForm} />
        </div>
      )}

      {selectedOpportunity && (
        <div className="popup-form">
          <UpdateOpportunity opportunity={selectedOpportunity} onUpdate={handleUpdate} onCancel={handleCloseForm} />
        </div>
      )}
    </div>
  );
};

export default OpportunityTable;

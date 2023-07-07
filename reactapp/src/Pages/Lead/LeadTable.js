import React, { useEffect, useState } from 'react';
import CreateLead from './CreateLead';
import UpdateLead from './UpdateLead';
import SearchLead from './SearchLead';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LeadTable.css';

const BASE_URL = 'https://8080-eccdafbbfbabafcfcbeaefdbdfafedfbadebae.project.examly.io/lead';

const LeadTable = () => {
  const [leads, setLeads] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [selectedLead, setSelectedLead] = useState(null);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = () => {
    setLoading(true);
    fetch(BASE_URL)
      .then(response => response.json())
      .then(data => setLeads(data))
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
          setLeads([data]);
        } else {
          setLeads([]);
        }
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  };

  const handleDelete = leadId => {
    setLoading(true);
    fetch(`${BASE_URL}/${leadId}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        if (data.deleted) {
          fetchLeads();
        }
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  };

  const handleEdit = lead => {
    setSelectedLead(lead);
  };

  const handleUpdate = updatedLead => {
    setLoading(true);
    fetch(`${BASE_URL}/${updatedLead.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedLead),
    })
      .then(response => response.json())
      .then(data => {
        if (data.id) {
          fetchLeads();
          setSelectedLead(null);
        }
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  };

  const handleCreate = newLead => {
    setLoading(true);
    fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newLead),
    })
      .then(response => response.json())
      .then(data => {
        if (data) {
          fetchLeads();
          setShowCreateForm(false);
        }
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  };

  const handleCloseForm = () => {
    setSelectedLead(null);
    setShowCreateForm(false);
  };

  return (
    <div className="container" style={{marginLeft:"200px"}}>
      <h2>Leads</h2>
      <div className="mb-3">
        <SearchLead
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          onSearch={handleSearch}
        />
        <button className="btn btn-primary" onClick={() => setShowCreateForm(true)}>
          Create Lead
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
              <th>Source</th>
              <th>Status</th>
              <th>Notes</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {leads.map(lead => (
              <tr key={lead.id}>
                <td>{lead.id}</td>
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.phone}</td>
                <td>{lead.source}</td>
                <td>{lead.status}</td>
                <td>{lead.notes}</td>
                <td>
                  <button className="btn btn-primary btn-sm" onClick={() => handleEdit(lead)}>
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(lead.id)}>
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
          <CreateLead onCreate={handleCreate} onCancel={handleCloseForm} />
        </div>
      )}

      {selectedLead && (
        <div className="popup-form">
          <UpdateLead lead={selectedLead} onUpdate={handleUpdate} onCancel={handleCloseForm} />
        </div>
      )}
    </div>
  );
};

export default LeadTable;

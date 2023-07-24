import React, { useEffect, useState } from 'react';
import CreateTicket from './CreateTicket';
import UpdateTicket from './UpdateTicket';
import SearchTicket from './SearchTicket';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TicketTable.css'; 

const BASE_URL = 'https://8080-eccdafbbfbabafcfcbeaefdbdfaeaeaadbdbabf.project.examly.io/ticket';

const TicketTable = () => {
  const [tickets, setTickets] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = () => {
    setLoading(true);
    fetch(BASE_URL)
      .then(response => response.json())
      .then(data => setTickets(data))
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
          setTickets([data]);
        } else {
          setTickets([]);
        }
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  };

  const handleDelete = ticketId => {
    setLoading(true);
    fetch(`${BASE_URL}/${ticketId}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        if (data.deleted) {
          fetchTickets();
        }
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  };

  const handleEdit = ticket => {
    setSelectedTicket(ticket);
  };

  const handleUpdate = updatedTicket => {
    setLoading(true);
    fetch(`${BASE_URL}/${updatedTicket.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTicket),
    })
      .then(response => response.json())
      .then(data => {
        if (data.id) {
          fetchTickets();
          setSelectedTicket(null);
        }
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  };

  const handleCreate = newTicket => {
    setLoading(true);
    fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTicket),
    })
      .then(response => response.json())
      .then(data => {
        if (data) {
          fetchTickets();
          setShowCreateForm(false);
        }
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  };

  const handleCloseForm = () => {
    setSelectedTicket(null);
    setShowCreateForm(false);
  };

  return (
    <div className="container">
      <h2>Tickets</h2>
      <div className="mb-3">
        <SearchTicket
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          onSearch={handleSearch}
        />
        <button className="btn btn-primary" onClick={() => setShowCreateForm(true)}>
          Create Ticket
        </button>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer ID</th>
              <th>Subject</th>
              <th>Description</th>
              <th>Status</th>
              <th>Assigned To</th>
              <th>Created At</th>
              <th>Updated At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map(ticket => (
              <tr key={ticket.id}>
                <td>{ticket.id}</td>
                <td>{ticket.customerId}</td>
                <td>{ticket.subject}</td>
                <td>{ticket.description}</td>
                <td>{ticket.status}</td>
                <td>{ticket.assignedTo}</td>
                <td>{ticket.createdAt}</td>
                <td>{ticket.updatedAt}</td>
                <td>
                  <button className="btn btn-primary btn-sm" onClick={() => handleEdit(ticket)}>
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(ticket.id)}>
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
          <CreateTicket onCreate={handleCreate} onCancel={handleCloseForm} />
        </div>
      )}

      {selectedTicket && (
        <div className="popup-form">
          <UpdateTicket ticket={selectedTicket} onUpdate={handleUpdate} onCancel={handleCloseForm} />
        </div>
      )}
    </div>
  );
};

export default TicketTable;

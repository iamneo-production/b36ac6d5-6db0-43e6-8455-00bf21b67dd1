import React, { useEffect, useState } from 'react';
import CreateTask from './CreateTask';
import UpdateTask from './UpdateTask';
import SearchTask from './SearchTask';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TaskTable1.css';

const BASE_URL = 'https://8080-eccdafbbfbabafcfcbeaefdbdfaeaeaadbdbabf.project.examly.io/task';

const TaskTable = () => {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    setLoading(true);
    fetch(BASE_URL)
      .then(response => response.json())
      .then(data => setTasks(data))
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
          setTasks([data]);
        } else {
          setTasks([]);
        }
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  };

  const handleDelete = taskId => {
    setLoading(true);
    fetch(`${BASE_URL}/${taskId}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        if (data.deleted) {
          fetchTasks();
        }
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  };

  const handleEdit = task => {
    setSelectedTask(task);
  };

  const handleUpdate = updatedTask => {
    setLoading(true);
    fetch(`${BASE_URL}/${updatedTask.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTask),
    })
      .then(response => response.json())
      .then(data => {
        if (data.id) {
          fetchTasks();
          setSelectedTask(null);
        }
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  };

  const handleCreate = newTask => {
    setLoading(true);
    fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    })
      .then(response => response.json())
      .then(data => {
        if (data) {
          fetchTasks();
          setShowCreateForm(false);
        }
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  };

  const handleCloseForm = () => {
    setSelectedTask(null);
    setShowCreateForm(false);
  };

  return (
    <div className="container">
      <h2>Tasks</h2>
      <div className="mb-3">
        <SearchTask
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          onSearch={handleSearch}
        />
        <button className="btn btn-primary" onClick={() => setShowCreateForm(true)}>
          Create Task
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
              <th>Description</th>
              <th>Assigned To</th>
              <th>Due Date</th>
              <th>Completed At</th>
              <th>Created At</th>
              <th>Updated At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(task => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.name}</td>
                <td>{task.description}</td>
                <td>{task.assignedTo}</td>
                <td>{task.dueDate}</td>
                <td>{task.completedAt}</td>
                <td>{task.createdAt}</td>
                <td>{task.updatedAt}</td>
                <td>
                  <button className="btn btn-primary btn-sm" onClick={() => handleEdit(task)}>
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(task.id)}>
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
          <CreateTask onCreate={handleCreate} onCancel={handleCloseForm} />
        </div>
      )}

      {selectedTask && (
        <div className="popup-form">
          <UpdateTask task={selectedTask} onUpdate={handleUpdate} onCancel={handleCloseForm} />
        </div>
      )}
    </div>
  );
};

export default TaskTable;

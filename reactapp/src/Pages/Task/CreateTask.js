import React, { useState } from 'react';
import './CreateTask.css';

const CreateTask = ({ onCreate, onCancel }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [completedAt, setCompletedAt] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [updatedAt, setUpdatedAt] = useState('');


  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAssignedToChange = (e) => {
    setAssignedTo(e.target.value);
  };

  const handleDueDateChange = (e) => {
    setDueDate(e.target.value);
  };

  const handleCompletedAtChange = (e) => {
    setCompletedAt(e.target.value);
  };

  const handleCreatedAtChange = (e) => {
    setCreatedAt(e.target.value);
  };

  const handleUpdatedAtChange = (e) => {
    setUpdatedAt(e.target.value);
  };

  const formatDate = (date) => {
    const [year, month, day] = date.split('-');
    return `${year}-${month}-${day}`;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {

      "name":name ,
      "description":description,
      "assignedTo":assignedTo ,
      "dueDate":dueDate ,
      "completedAt":completedAt + "T10:00:00",
      "createdAt":createdAt + "T10:00:00" ,
      "updatedAt":updatedAt + "T10:00:00"
    };
    onCreate(newTask);
    setName('');
    setDescription('');
    setAssignedTo('');
    setDueDate('');
    setCompletedAt('');
    setCreatedAt('');
    setUpdatedAt('');
  };
  
  return (
    <div className="create-task-container">
      <h3>Create Task</h3>
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
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="assignedTo" className="form-label">
            Assigned To
          </label>
          <input
            type="text"
            className="form-control"
            id="assignedTo"
            value={assignedTo}
            onChange={handleAssignedToChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dueDate" className="form-label">
            Due Date
          </label>
          <input
            type="date"
            className="form-control"
            id="dueDate"
            value={dueDate ? formatDate(dueDate) : ''}
            onChange={handleDueDateChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="completedAt" className="form-label">
            Completed At
          </label>
          <input
            type="date"
            className="form-control"
            id="completedAt"
            value={completedAt ? formatDate(completedAt) : ''}
            onChange={handleCompletedAtChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="createdAt" className="form-label">
            Created At
          </label>
          <input 
            type="date"
            className="form-control"
            id="createdAt"
            value={createdAt ? formatDate(createdAt) : ''}
            onChange={handleCreatedAtChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="updatedAt" className="form-label">
            Updated At
          </label>
          <input 
            type="date"
            className="form-control"
            id="updatedAt"
            value={updatedAt ? formatDate(updatedAt) : ''}
            onChange={handleUpdatedAtChange}
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

export default CreateTask;

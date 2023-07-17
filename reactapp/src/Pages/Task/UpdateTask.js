import React, { useState } from 'react';
import './UpdateTask.css';

const UpdateTask = ({ task, onUpdate, onCancel }) => {
  const [name, setName] = useState(task.name);
  const [description, setDescription] = useState(task.description);
  const [assignedTo, setAssignedTo] = useState(task.assigned_to);
  const [dueDate, setDueDate] = useState(task.due_date);
  const [completedAt, setCompletedAt] = useState(task.completed_at);
  const [createdAt, setCreatedAt] = useState(task.created_at);
  const [updatedAt, setUpdatedAt] = useState(task.updated_at);

  const handleUpdate = () => {
    const updatedTask = {
      id: task.id,
      "name":name ,
      "description":description,
      "assignedTo":assignedTo ,
      "dueDate":dueDate ,
      "completedAt":completedAt + "T10:00:00",
      "createdAt":createdAt + "T10:00:00" ,
      "updatedAt":updatedAt + "T10:00:00"
    };

    onUpdate(updatedTask);
  };

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


  return (
    <div className="update-task-container">
      <h2>Update Task ID: {task.id}</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <input type="text" id="description" value={description} onChange={handleDescriptionChange} />
      </div>
      <div className="form-group">
        <label htmlFor="assignedTo">Assigned To:</label>
        <input type="text" id="assignedTo" value={assignedTo} onChange={handleAssignedToChange} />
      </div>
      <div className="form-group">
        <label htmlFor="dueDate">Due Date:</label>
        <input type="date" id="dueDate" value={dueDate} onChange={handleDueDateChange} />
      </div>
      <div className="form-group">
        <label htmlFor="completedAt">Completed At:</label>
        <input type="date" id="completedAt" value={completedAt} onChange={handleCompletedAtChange} />
      </div>
      <div className="form-group">
        <label htmlFor="CreatedAt">Created At:</label>
        <input type="date" id="createdAt" value={createdAt} onChange={handleCreatedAtChange} />
      </div>
      <div className="form-group">
        <label htmlFor="UpdatedAt">Updated At:</label>
        <input type="date" id="updatedAt" value={updatedAt} onChange={handleUpdatedAtChange} />
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

export default UpdateTask;

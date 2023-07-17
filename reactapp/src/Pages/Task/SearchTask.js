import React from 'react';

const SearchTask = ({ searchQuery, onSearchChange, onSearch }) => {
  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={onSearchChange}
        placeholder="Search task by ID..."
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

export default SearchTask;

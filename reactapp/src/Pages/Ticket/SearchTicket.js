import React from 'react';

const SearchTicket = ({ searchQuery, onSearchChange, onSearch }) => {
  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={onSearchChange}
        placeholder="Search ticket by ID..."
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
};


export default SearchTicket;

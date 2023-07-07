import React from 'react';

const SearchLead = ({ searchQuery, onSearchChange, onSearch }) => {
  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={onSearchChange}
        placeholder="Search lead by ID..."
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

export default SearchLead;

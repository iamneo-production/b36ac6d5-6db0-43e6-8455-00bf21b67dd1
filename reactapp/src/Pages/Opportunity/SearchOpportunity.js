import React from 'react';

const SearchOpportunity = ({ searchQuery, onSearchChange, onSearch }) => {
  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={onSearchChange}
        placeholder="Search opportunity by ID..."
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

export default SearchOpportunity;

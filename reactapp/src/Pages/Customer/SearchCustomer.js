import React from 'react';

const SearchCustomer = ({ searchQuery, onSearchChange, onSearch }) => {
  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={onSearchChange}
        placeholder="Search customer by ID..."
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

export default SearchCustomer;
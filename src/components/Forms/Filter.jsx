import React from 'react';
//Dropdown
export default function Filter({ types, filterChange, selectedType }) {
  return (
    <div>
      <select
        aria-label="dropdown"
        value={selectedType}
        onChange={(e) => filterChange(e.target.value)}
      >
        <option value="all">All</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
}

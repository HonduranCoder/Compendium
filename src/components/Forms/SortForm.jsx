import React from 'react';

export default function SortForm({ sortPokemon, setSortPokemon }) {
  return (
    <div>
      <select
        aria-label="sort"
        value={sortPokemon}
        onChange={(e) => setSortPokemon(e.target.value)}
      >
        <option value="asc">ASC</option>
        <option value="desc">DESC</option>
      </select>
    </div>
  );
}

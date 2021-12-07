import React from 'react';
import Filter from '../Forms/Filter';
import SortForm from '../Forms/SortForm';

export default function Controls({
  types,
  selectedType,
  filterChange,
  sortPokemon,
  setSortPokemon,
}) {
  return (
    <div>
      <Filter
        types={types}
        filterChange={filterChange}
        selectedType={selectedType}
      />
      <SortForm sortPokemon={sortPokemon} setSortPokemon={setSortPokemon} />
    </div>
  );
}

//pages
import React from 'react';
import { useState, useEffect } from 'react';
import PokemonList from '../../components/PokemonList/PokemonList.jsx';
import { fetchPokemonByType, getPokemon } from '../../services/pokemon.js';
import { fetchTypes } from '../../services/pokemon.js';
import Controls from '../../components/Controls/Controls';
import SortForm from '../../components/Forms/SortForm.jsx';

export default function Compendium() {
  const [loading, setLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const [sortPokemon, setSortPokemon] = useState('asc');

  useEffect(() => {
    async function getPokemonList() {
      const fetchPokemon = await getPokemon();
      setPokemonList(fetchPokemon);
      setLoading(false);
    }
    getPokemonList();
  }, []);

  useEffect(() => {
    async function getTypes() {
      const pokemonTypes = await fetchTypes();
      setTypes(pokemonTypes);
    }
    getTypes();
  }, []);

  useEffect(() => {
    if (!selectedType) return;
    async function getIndieTypes() {
      if (selectedType === 'all') {
        const fetchPokemon = await getPokemon();
        setPokemonList(fetchPokemon);
      } else {
        const filteredPokemon = await fetchPokemonByType(
          selectedType,
          sortPokemon
        );
        setPokemonList(filteredPokemon);
      }
    }
    getIndieTypes();
  }, [selectedType, sortPokemon]);

  if (loading) {
    return <h1> Wait For It </h1>;
  }

  return (
    <div>
      <Controls
        types={types}
        selectedType={selectedType}
        filterChange={setSelectedType}
        sortPokemon={sortPokemon}
        setSortPokemon={setSortPokemon}
      />
      <PokemonList pokemonList={pokemonList} />
    </div>
  );
}

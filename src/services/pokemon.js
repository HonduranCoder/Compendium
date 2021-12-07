//the API utils (services folder like a utility)
//fetch calls, munging functions (helper/utilites file)
//no rfc...just JS file

export const getPokemon = async () => {
  const res = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex');
  const body = await res.json();

  return body.results;
};

export const fetchTypes = async () => {
  const res = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex/types`
  );
  const pokemonTypes = await res.json();
  const pokemonTypesMap = pokemonTypes.map((pokemonType) => pokemonType.type);
  return pokemonTypesMap;
};

export const fetchPokemonByType = async (type, sort) => {
  const res = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?type=${type}&sort=pokemon&direction=${sort}`
  );
  const body = await res.json();
  return body.results;
};

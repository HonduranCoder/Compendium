import { screen, render } from '@testing-library/react';
import PokemonList from './PokemonList.jsx';

it('test Pokemon List', () => {
  const data = [
    {
      image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/617.png',
      pokemon: 'anorth',
      hp: '45',
      attack: '95',
      defense: '50',
      shape: 'armor',
    },
    {
      image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/347.png',
      pokemon: 'accelgor',
      hp: '80',
      attack: '70',
      defense: '40',
      shape: 'arms',
    },
  ];
  render(<PokemonList pokemonList={data} />);
  const pokemonList = screen.getByLabelText('pokemonList');
  expect(pokemonList).toMatchSnapshot();
});

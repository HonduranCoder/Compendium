//Map through Pokemon array to display individual pokemon
//pokemonList.map(pokemon=>(<Pokemon {...props (pokemon.image)}/>))

import React from 'react';
import Pokemon from '../Pokemon/Pokemon.jsx';

export default function PokemonList({ pokemonList }) {
  //pass in props from the view, where state is going to live
  return (
    <div>
      <ul aria-label="pokemonList">
        {pokemonList.map(
          ({ pokemon, hp, attack, defense, shape, url_image }) => (
            <li key={pokemon}>
              <Pokemon
                image={url_image}
                pokemon={pokemon}
                hp={hp}
                attack={attack}
                defense={defense}
                shape={shape}
              />
            </li>
          )
        )}
      </ul>
    </div>
  );
}

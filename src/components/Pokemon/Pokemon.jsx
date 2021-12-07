//Render Pokemon Item, map through an array in Pokemon list
import React from 'react';

export default function Pokemon({
  pokemon,
  hp,
  attack,
  defense,
  shape,
  image,
}) {
  return (
    <div aria-label="pokemon" key={pokemon}>
      <img src={image} alt="poke" />
      <p>Name: {pokemon}</p>
      <p>HP: {hp}</p>
      <p>Attack: {attack}</p>
      <p>Defense: {defense}</p>
      <p>Shape: {shape}</p>
    </div>
  );
}

// src/components/PokemonCard.js
import React from 'react';
import './PokemonCard.css'; // Asegúrate de que el archivo CSS se esté importando correctamente.

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="card">
      <div className="overlap-group">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <div className="frame-3">
        <h2 className="pokemon-number">#{pokemon.id}</h2> {/* Número del Pokémon */}
        <h2 className="pokemon-name">{pokemon.name}</h2>
      </div>
    </div>
  );
};

export default PokemonCard;

// src/components/PokemonList.js
import React, { useEffect, useContext } from 'react';
import PokemonCard from './PokemonCard';
import { PokemonContext } from '../context/PokemonContext';
import './style.css';

const PokemonList = () => {
  const { state } = useContext(PokemonContext);
  const { pokemons, loading, searchTerm } = state;

  if (loading) {
    return <div>Cargando...</div>;
  }

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="pokemon-list">
      {filteredPokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonList;


// src/App.js
import React from 'react';
import PokemonProvider from './context/PokemonContext';
import PokemonList from './components/PokemonList';
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <PokemonProvider>
      <div className="App">
        <SearchBar />
        <PokemonList />
      </div>
    </PokemonProvider>
  );
};

export default App;

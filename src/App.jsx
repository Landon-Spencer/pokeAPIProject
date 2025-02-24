import React, { useState } from 'react';
import MainDisplay from './MainDisplay';
import './App.css';

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const handlePokemonSelect = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  return (
    <div className="App">
      <MainDisplay onSelected={handlePokemonSelect} />
    </div>
  );
}

export default App;

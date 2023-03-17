import React from 'react';
import './App.css';
import ItemContextProvider from './context/PokemonContextProvider';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <ItemContextProvider>
        <Home/>
      </ItemContextProvider>
    </div>
  );
}

export default App;


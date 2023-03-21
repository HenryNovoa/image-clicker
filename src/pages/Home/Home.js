import React from 'react';
import ItemList from '../../components/PokemonList/PokemonList';
import ItemDetails from '../../components/PokemonDetails/PokemonDetails';
import PokemonHeader from '../../components/PokemonHeader/PokemonHeader'
import styles from './Home.module.css';


const Home = () => {
  return (
    <div className={styles.Home}>
        <PokemonHeader/>
        <ItemList /> 
        <ItemDetails/>   
    </div>
  );
};

export default Home;
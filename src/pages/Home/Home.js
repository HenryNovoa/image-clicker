import React from 'react';
import ItemList from '../../components/PokemonList/PokemonList';
import ItemDetails from '../../components/PokemonDetails/PokemonDetails';
import styles from './Home.module.css';


const Home = () => {
  return (
    <div className={styles.Home}>
        <ItemList /> 
        <ItemDetails/>   
    </div>
  );
};

export default Home;
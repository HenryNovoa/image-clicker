import React from 'react';
import PokemonList from '../../components/PokemonList/PokemonList';
import PokemonDetails from '../../components/PokemonDetails/PokemonDetails';
import PokemonHeader from '../../components/PokemonHeader/PokemonHeader'
import styles from './Home.module.css';


const Home = () => {
  return (
    <div className={styles.Home}>
        <PokemonHeader/>
        <div className={styles.Content}>
          <PokemonList /> 
          <PokemonDetails />   
        </div>
    </div>
  );
};

export default Home;
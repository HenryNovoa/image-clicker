import { React } from 'react'
import styles from './PokemonHeader.module.css'

const PokemonHeader = () => {

    return (
        <header className={styles.pokemonHeader}>
            <h1>Pokémon Image Clicker</h1>
        </header>
    );
};

export default PokemonHeader
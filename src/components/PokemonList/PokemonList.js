import React from 'react';
import { usePokemonContext } from '../../context/PokemonContextProvider';
import PokemonItem from '../PokemonItem/PokemonItem';
import styles from './PokemonList.module.css';

const PokemonList = () => {
  const { items, handleItemClick } = usePokemonContext()
  return (
    <div className={styles.itemList}>
        {items && items.map((item) => (
          <PokemonItem key={item.id} item={item} handleItemClick={handleItemClick}/>
        ))}
    </div>
  );
};

export default PokemonList;

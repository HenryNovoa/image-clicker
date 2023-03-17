import React from 'react';
import PokemonItem from '../PokemonItem/PokemonItem'
import { usePokemonContext } from '../../context/PokemonContextProvider';
import styles from './PokemonList.module.css';

const PokemonList = () => {
  const { items, handleItemClick } = usePokemonContext()
  return (
    <div className={styles.itemList}>
      <ul>
        {items && items.map((item) => (
          <PokemonItem key={item.id} item={item} handleItemClick={handleItemClick}/>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;

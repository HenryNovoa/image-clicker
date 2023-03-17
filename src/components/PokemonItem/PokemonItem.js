import React from 'react';
import styles from './PokemonItem.module.css';

const PokemonItem = ({ item, handleItemClick }) => {
  return (
          <li className={styles.item} key={item.id}>
            <button onClick={() => handleItemClick(item.id)}>
              <img src={item.imageUrl} alt={item.name} />
              <span>{item.name}</span>
            </button>
          </li>
  );
};

export default PokemonItem;
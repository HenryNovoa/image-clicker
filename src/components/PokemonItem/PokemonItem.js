import React from 'react';
import styles from './PokemonItem.module.css';

const PokemonItem = ({ item, handleItemClick }) => {
  return (
          <div className={styles.item} key={item.id} onClick={() => handleItemClick(item.id)}>
              <h2>{item.name}</h2>
              <img src={item.imageUrl} alt={item.name} />
          </div>
  );
};

export default PokemonItem;
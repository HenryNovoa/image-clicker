import React from 'react';
import { usePokemonContext } from '../../context/PokemonContextProvider';
import styles from './PokemonDetails.module.css';

function ItemDetails() {
  const { selectedItem , incrementClicks } = usePokemonContext();
  if(!selectedItem) {
    return null;
  }
  const { name , imageUrl , clicks = 0, abilities } = selectedItem;

  return (
    <div className={styles.itemDetails}>
      <h2>{name}</h2>
      <img src={imageUrl} alt={name} onClick={incrementClicks} />
      <h3>Abilities</h3>
      <ul>
        {abilities && abilities.map(element => <li> <p>{element.ability.name}</p> <p>hidden:{element.is_hidden ? "True": "False"}</p></li>)}
      </ul>
      <p>Number of clicks: {clicks}</p>
    </div>
  );
}

export default ItemDetails;

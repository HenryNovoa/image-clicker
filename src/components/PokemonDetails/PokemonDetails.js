import React from 'react';
import { usePokemonContext } from '../../context/PokemonContextProvider';
import styles from './PokemonDetails.module.css';

const PokemonDetails = () => {
  const { selectedItem , incrementClicks } = usePokemonContext();
  if(!selectedItem) {
    return null;
  }
  const { name , imageUrl , clicks = 0, abilities } = selectedItem;
  console.log(selectedItem)

  return (
    <div className={styles.itemDetails}>
      <h2>{name}</h2>
      <img src={imageUrl} alt={name} onClick={incrementClicks} />
      <h3>Abilities</h3>
      <ul>
        {abilities && abilities.map((element) => <li key={element.ability.name}> <p>{element.ability.name.toUpperCase()}</p></li>)}
      </ul>
      <p>Number of clicks: {clicks}</p>
    </div>
  );
}

export default PokemonDetails;

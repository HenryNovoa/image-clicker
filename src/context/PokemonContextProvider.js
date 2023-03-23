import React, { useState, useEffect, createContext, useContext } from 'react';
import { getPokemons, getPokemonDetails, getPokemonImageUrl } from '../services/pokemonApi';

const PokemonContext = createContext();

export const usePokemonContext = () => {
  return useContext(PokemonContext);
};

const PokemonContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  console.log(items)
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const itemsData = await getPokemons();
    const items = itemsData.map((itemData) => ({
      id: itemData.name,
      name: itemData.name.toUpperCase(),
      imageUrl: getPokemonImageUrl(itemData.url),
      clicks: 0,
    }));
    setItems(items);
  };

  const fetchItemDetails = async (id, clicks) => {
    const itemDetails = await getPokemonDetails(id);
    const selectedItem = {
      id: itemDetails.name,
      name: itemDetails.name.toUpperCase(),
      imageUrl: itemDetails.sprites.front_default,
      clicks: clicks,
      abilities: itemDetails.abilities
    };
    setSelectedItem(selectedItem);
  };

  const handleItemClick = async (id) => {
    const itemToUpdate = items.find((item) => item.id === id);
    const updatedItem = { ...itemToUpdate, clicks: itemToUpdate.clicks + 1 };
    const updatedItems = items.map((item) =>
      item.id === id ? updatedItem : item
    );
    setItems(updatedItems);
    await fetchItemDetails(id, updatedItem.clicks)
  };

  return (
    <PokemonContext.Provider
      value={{ items, selectedItem, fetchItems, fetchItemDetails, handleItemClick }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContextProvider;


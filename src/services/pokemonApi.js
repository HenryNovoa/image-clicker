const API_URL = 'https://pokeapi.co/api/v2';

export const getPokemons = async () => {
  const response = await fetch(`${API_URL}/pokemon?limit=20`);
  const data = await response.json();
  return data.results;
};

export const getPokemonDetails = async (name) => {
  const response = await fetch(`${API_URL}/pokemon/${name}`);
  const data = await response.json();
  return data;
};

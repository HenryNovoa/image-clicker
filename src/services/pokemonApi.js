const API_URL = 'https://pokeapi.co/api/v2';
const IMAGE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

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

export const getPokemonImageUrl = (url) => {
  return `${IMAGE_URL}${
    url.split('/')[6]
  }.png`
}
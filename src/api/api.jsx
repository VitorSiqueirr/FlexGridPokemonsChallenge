// eslint-disable-next-line react-refresh/only-export-components
import { DOMAIN } from "../constants/const";

export async function fetchPokemonsWithDetails(
  url = `${DOMAIN}/pokemon/?offset=0&limit=24`
) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  const resultsWithDetails = await Promise.all(
    data.results.map(async (pokemon) => {
      const detailsResponse = await fetch(pokemon.url);
      if (!detailsResponse.ok) {
        throw new Error(`HTTP error! status: ${detailsResponse.status}`);
      }
      const details = await detailsResponse.json();
      return { ...pokemon, details };
    })
  );
  return { results: resultsWithDetails };
}

export async function fetchPokemonById(id) {
  const response = await fetch(`${DOMAIN}/pokemon/${id}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

export async function fetchPokemonSpeciesById(id) {
  const response = await fetch(`${DOMAIN}/pokemon-species/${id}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

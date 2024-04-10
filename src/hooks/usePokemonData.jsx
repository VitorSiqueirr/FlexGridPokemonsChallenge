import { useEffect, useState } from "react";
import { fetchPokemonsWithDetails } from "../api/api";
import { MAX_OFFSET, DOMAIN } from "../constants/const";

export function usePokemonData() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pokemons, setPokemons] = useState([]);
  const [nextOffset, setNextOffset] = useState(25);

  useEffect(() => {
    fetchPokemonsWithDetails()
      .then(({ results }) => {
        setPokemons(results);
      })
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, []);

  const fetchMorePokemons = () => {
    setIsLoading(true);
    setNextOffset(nextOffset + 25);
    if (nextOffset > MAX_OFFSET) {
      return;
    }
    const nextUrl = `${DOMAIN}/pokemon/?offset=${nextOffset}&limit=25`;
    fetchPokemonsWithDetails(nextUrl)
      .then(({ results }) => {
        setPokemons((prevPokemons) => prevPokemons.concat(results));
      })
      .catch(setError)
      .finally(() => setIsLoading(false));
  };

  return { isLoading, error, pokemons, fetchMorePokemons };
}

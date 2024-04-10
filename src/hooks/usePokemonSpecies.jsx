import { useEffect, useState } from "react";
import { fetchPokemonSpeciesById } from "../api/api";

export function usePokemonSpecies(id) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [species, setSpecies] = useState(null);

  useEffect(() => {
    fetchPokemonSpeciesById(id)
      .then(setSpecies)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, [id]);

  return { isLoading, error, species };
}

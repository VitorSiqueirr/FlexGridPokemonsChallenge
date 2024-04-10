import { useEffect, useState } from "react";
import { fetchPokemonById } from "../api/api";

export const usePokemon = (id) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetchPokemonById(id)
      .then(setPokemon)
      .catch((error) => console.error(error));
  }, [id]);

  return pokemon;
};

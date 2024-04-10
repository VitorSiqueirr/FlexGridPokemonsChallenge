import { Routes, Route } from "react-router-dom";
import Pokedex from "../components/pokedex/Pokedex";
import PokemonDetails from "../components/pokemonDetails/PokemonDetails";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/pokemon/:id" element={<PokemonDetails />} />
      <Route path="/" element={<Pokedex />} />
    </Routes>
  );
}

export default AppRoutes;

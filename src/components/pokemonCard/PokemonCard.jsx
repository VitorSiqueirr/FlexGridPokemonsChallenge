/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import "./PokemonCard.css";

const PokemonCard = React.forwardRef(({ pokemon }, ref) => (
  <Link
    to={`/pokemon/${pokemon.details.id}`}
    key={pokemon.details.id}
    className="cards"
    ref={ref}>
    <span className="poke-number">#{pokemon.details.id}</span>
    <img src={pokemon.details.sprites.front_default} alt={pokemon.name} />
    <p className="poke-name">{pokemon.name}</p>
  </Link>
));

PokemonCard.displayName = "PokemonCard";

export default PokemonCard;

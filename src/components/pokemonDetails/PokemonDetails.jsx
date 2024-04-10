import { Link, useParams } from "react-router-dom";
import { usePokemonSpecies } from "../../hooks/usePokemonSpecies";
import { usePokemon } from "../../hooks/usePokemonId";
import { PokemonStats } from "../pokemonStats/PokemonStats";
import { MIN_POKEMON_ID, MAX_POKEMON_ID } from "../../constants/const";

import ChevronLeftIcon from "../../assets/icons/ChevronLeft";
import ArrowBackIcon from "../../assets/icons/ArrowBack";
import ChevronRightIcon from "../../assets/icons/ChevronRight";
import WeightIcon from "../../assets/icons/Weight";
import StraightenIcon from "../../assets/icons/Straighten";
import PokeballIcon from "../../assets/icons/Pokeball";

import "./PokemonDetails.css";
import "./TypeColors.css";
import "../DetailsBackground.css";

export default function PokemonDetails() {
  const { id: idString } = useParams();
  const id = parseInt(idString, 10);
  const pokemon = usePokemon(id);
  const { species } = usePokemonSpecies(id);

  const hasPreviousPokemon = id > MIN_POKEMON_ID;
  const hasNextPokemon = id < MAX_POKEMON_ID;

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  const description = species.flavor_text_entries.find(
    (entry) => entry.language.name === "en"
  )?.flavor_text;

  const cleanDescription = description
    ? description.replace(/[\n\f]/g, " ")
    : "there's no description of this pokemon yet";

  return (
    <div className={`details-background container ${species.color.name}`}>
      <header className="details-header">
        <PokeballIcon />
        <Link to="/">
          <ArrowBackIcon />
        </Link>
        <h1 className="poke-name">{pokemon.name}</h1>
        <p className="poke-id">#{pokemon.id}</p>
      </header>
      <div className="sprite">
        <div className="icon-container">
          {hasPreviousPokemon && (
            <Link to={`/pokemon/${id - 1}`}>
              <ChevronLeftIcon />
            </Link>
          )}
        </div>
        <img
          src={pokemon.sprites.front_default}
          alt={"image of " + pokemon.name}
        />
        <div className="icon-container">
          {hasNextPokemon && (
            <Link to={`/pokemon/${id + 1}`}>
              <ChevronRightIcon />
            </Link>
          )}
        </div>
      </div>
      <div className="types">
        {pokemon.types.map((types) => {
          return (
            <div
              key={types.type.name}
              className={`type type-${types.type.name}`}>
              {types.type.name}
            </div>
          );
        })}
      </div>
      <div className="details">
        <h2 className={`sub-title ${species.color.name}`}>About</h2>
        <div className="infos">
          <div className="info-card">
            <span>
              <WeightIcon />
              {pokemon.weight} kg
            </span>
            <p>Weight</p>
          </div>
          <div className="vertical-line-details"></div>
          <div className="info-card">
            <span>
              <StraightenIcon />
              {pokemon.height} m
            </span>
            <p>Height</p>
          </div>
          <div className="vertical-line-details second-vertical-line"></div>
          <div className="info-card">
            <div className="abilities">
              {pokemon.abilities.map((ability) => (
                <div key={ability.ability.name}>{ability.ability.name}</div>
              ))}
            </div>
            <p>Abilities</p>
          </div>
        </div>
        <div className="description">
          <p>{cleanDescription}</p>
        </div>
        <PokemonStats
          stats={pokemon.stats}
          backgroundColor={species.color.name}
        />
      </div>
    </div>
  );
}

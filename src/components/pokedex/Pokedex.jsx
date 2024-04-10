import { useEffect, useMemo, useRef, useState } from "react";
import PokeballIcon from "../../assets/icons/Pokeball";
import SearchIcon from "../../assets/icons/Search";
import SortIcon from "../../assets/icons/Sort";
import { usePokemonData } from "../../hooks/usePokemonData";
import PokemonCard from "../pokemonCard/PokemonCard";
import "./Pokedex.css";

export default function Pokedex() {
  const { error, pokemons, fetchMorePokemons } = usePokemonData();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("pokedexNumber");
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);
  const lastPokemonRef = useRef(null);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      async (entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          setIsLoading(true);
          await fetchMorePokemons();
          setIsLoading(false);
        }
      },
      { threshold: 1 }
    );

    const currentRef = lastPokemonRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [fetchMorePokemons, lastPokemonRef, isLoading]);

  const filterPokemons = (pokemons, term) => {
    return pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(term.toLowerCase())
    );
  };

  const sortPokemons = (pokemons, type) => {
    return [...pokemons].sort((a, b) => {
      if (type === "pokedexNumber") {
        return a.id - b.id;
      } else if (type === "name") {
        return a.name.localeCompare(b.name);
      } else {
        return 0;
      }
    });
  };

  const filteredPokemons = useMemo(() => {
    let filtered = filterPokemons(pokemons, searchTerm);
    filtered = sortPokemons(filtered, sortType);
    return filtered;
  }, [pokemons, searchTerm, sortType]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (value) => {
    setSortType(value);
  };

  const toggleSortMenu = () => {
    setIsSortMenuOpen(!isSortMenuOpen);
  };

  return (
    <div className="container poke-container">
      <header>
        <h1 className="title">
          <PokeballIcon />
          Pokédex
        </h1>

        <form className="search-sort">
          <div className={`input-wrapper ${searchTerm ? "searching" : ""}`}>
            <SearchIcon />
            <input
              type="text"
              name="search-pokedex"
              id="search"
              placeholder="Search"
              className="input-search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>

          <button
            className={`sort-button ${isSortMenuOpen ? "select" : ""}`}
            type="button"
            onClick={toggleSortMenu}
            title="sort-button">
            <SortIcon />

            <div
              className={`sort-menu-mask ${
                isSortMenuOpen ? "visible" : "hidden"
              }`}
              onClick={toggleSortMenu}></div>
            <div
              className={`sort-menu ${isSortMenuOpen ? "visible" : "hidden"}`}
              onClick={(e) => e.stopPropagation()}>
              <p>Sort by:</p>
              <div className="sort-choice">
                <label>
                  <input
                    className="sort-radio"
                    type="radio"
                    name="sort"
                    value="pokedexNumber"
                    checked={sortType === "pokedexNumber"}
                    onChange={(e) => handleSortChange(e.target.value)}
                  />
                  Number
                </label>
                <label>
                  <input
                    className="sort-radio"
                    type="radio"
                    name="sort"
                    value="name"
                    checked={sortType === "name"}
                    onChange={(e) => handleSortChange(e.target.value)}
                  />
                  Name
                </label>
              </div>
            </div>
          </button>
        </form>
      </header>
      <div className="pokedex">
        {error ? (
          <>
            <h1 className="title">
              An error has occurred while getting the pokemons: {error}
            </h1>
          </>
        ) : (
          <div className="pokemons">
            {filteredPokemons.map((pokemon, index) => (
              <PokemonCard
                key={index}
                pokemon={pokemon}
                ref={
                  index === filteredPokemons.length - 1 ? lastPokemonRef : null
                }
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

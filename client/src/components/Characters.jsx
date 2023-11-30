import { useState, useEffect } from "react";
import { fetchAllCharacters } from "../../fetching";
import { useNavigate } from "react-router-dom";

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [searchParam, setSearchParam] = useState("");
  const [currentFilter, setCurrentFilter] = useState("All");
  const navigate = useNavigate();
  const onOptionChange = (e) => {
    setCurrentFilter(e.target.value);
  };

  useEffect(() => {
    async function getAllCharacters() {
      const characters = await fetchAllCharacters();
      setCharacters(characters);
      console.log(characters);
      return characters;
    }
    getAllCharacters();
  }, []);

  const searchedCharacters = searchParam
    ? characters.filter(
        (character) =>
          character.name.toLowerCase().includes(searchParam) ||
          character.description.toLowerCase().includes(searchParam)
      )
    : characters;

  const filteredCharacters =
    currentFilter === "All"
      ? searchedCharacters
      : searchedCharacters.filter((character) => {
          if (currentFilter === "Human") {
            return character.human;
          } else if (currentFilter === "Non-Human") {
            return !character.human;
          } else {
            return true;
          }
        });

  console.log("characters", characters);
  console.log("searched", searchedCharacters);
  console.log("filtered", filteredCharacters);

  return (
    <div className="character-page-container">
      <h1>All Characters</h1>
      <div className="search-and-filter">
        <div className="search-characters">
          <label>
            <h4 className="search-filter-header"> Search:{""}</h4>
            <br />
            <input
              id="search-characters-bar"
              type="text"
              placeholder="search character name/description"
              onChange={(event) =>
                setSearchParam(event.target.value.toLowerCase())
              }
            />
          </label>
        </div>{" "}
        <h4 className="search-filter-header">Filter:</h4>
        <div className="filter-buttons">
          <input
            type="radio"
            id="all"
            value="All"
            checked={currentFilter === "All"}
            onChange={onOptionChange}
          />
          <label htmlFor="all">All</label>
          <input
            type="radio"
            id="human"
            value="Human"
            checked={currentFilter === "Human"}
            onChange={onOptionChange}
          />
          <label htmlFor="human">Human</label>
          <input
            type="radio"
            id="non-human"
            value="Non-Human"
            checked={currentFilter === "Non-Human"}
            onChange={onOptionChange}
          />
          <label htmlFor="non-human">Non-Human</label>
        </div>
      </div>
      <div className="all-characters">
        {filteredCharacters.map((character) => {
          return (
            <div className="single-character" key={character.characterId}>
              <h3 className="character-headers">{character.name}</h3>
              <img
                className="character-image-all"
                src={character.image}
                alt={character.name}
              />
              <br />
              <button
                className="character-buttons"
                onClick={() => {
                  navigate(`/characters/${character.characterId}`);
                }}
              >
                See Details
              </button>
              {/* BUTTON ATTEMPT */}
              {/* <button
                key={character.characterId}
                onClick={() => navigate(`characters/${character.characterId}`)}
              >
                See Character Details
              </button> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

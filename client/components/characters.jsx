import { useState, useEffect } from "react";
import { fetchAllCharacters } from "../fetching";

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [searchParam, setSearchParam] = useState("");
  const [currentFilter, setCurrentFilter] = useState("all");

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
    currentFilter === "all"
      ? searchedCharacters
      : searchedCharacters.filter((character) => {
          if (currentFilter === "onlyHuman") {
            return character.human;
          } else {
            return !character.human;
          }
        });

  //radio button with onchange call setFilter()
  //if, else if, else

  return (
    <div className="character-page-container">
      <h1>All Characters</h1>
      <div id="search-characters"></div>
      <label>
        Search:{""}
        <input
          id="search-characters-bar"
          type="text"
          placeholder="Search Characters"
          onChange={(event) => setSearchParam(event.target.value.toLowerCase())}
        />
      </label>

      <div className="all-characters">
        {searchedCharacters.map((character) => {
          return (
            <div className="single-character" key={character.characterId}>
              <h3>{character.name}</h3>
              <img
                className="character-image"
                src={character.image}
                alt={character.name}
              />
              <p>{character.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

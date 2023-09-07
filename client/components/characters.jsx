// import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchAllCharacters } from "../fetching";

export default function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function getAllCharacters() {
      const characters = await fetchAllCharacters();
      setCharacters(characters);
      console.log(characters);
      return characters;
    }
    getAllCharacters();
  }, []);

  return (
    <div className="characters-container">
      {characters.map((character) => {
        return (
          <div className="single-character" key={character.characterId}>
            <p>{character.name}</p>
            <p>{character.description}</p>
            <img src={character.image} alt={character.name} />
          </div>
        );
      })}
    </div>
  );
}

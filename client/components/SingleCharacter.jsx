import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchSingleCharacter } from "../fetching";

export default function SingleCharacter() {
  const params = useParams();
  const [character, setCharacter] = useState({});

  async function getSingleCharacter() {
    // fetch data from API
    try {
      setCharacter(await fetchSingleCharacter(params.characterId));
      console.log(character);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getSingleCharacter();
  }, []);

  return (
    <div key={character.characterId}>
      <h4>{character.name}</h4>
      <p>{character.description}</p>
      <img
        className="character-image"
        src={character.image}
        alt={character.name}
      />
    </div>
  );
}

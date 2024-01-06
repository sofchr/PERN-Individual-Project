import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchSingleCharacter } from "./fetching";

export default function SingleCharacter() {
  const navigate = useNavigate();
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
    <div className="single-character-page">
      <div className="single-character-card" key={character.characterId}>
        <h3 className="character-headers">{character.name}</h3>
        <p>{character.description}</p>
        <img
          className="character-image-single"
          src={character.image}
          alt={character.name}
        />
        <br />
        <button
          className="character-buttons"
          onClick={() => {
            navigate(`/characters`);
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
}

// import { useNavigate } from "react-router-dom";
import { fetchAllCharacters } from "../../fetching";

export default function allCharacters() {
  useEffect(() => {
    async function getAllCharacters() {
      const characters = await fetchAllCharacters;
    }
  });

  return (
    <h1>
      {characters.map((character) => {
        return (
          <>
            <div key={character.characterId}>
              <h2>{character.name}</h2>
              <p>{character.description}</p>
            </div>
          </>
        );
      })}
    </h1>
  );
}

// import { useNavigate } from "react-router-dom";
import { fetchAllCharacters } from "../../fetching";

export default function Characters() {
  useEffect(() => {
    async function Characters() {
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
              <img src={character.image} alt={character.name} />
            </div>
          </>
        );
      })}
    </h1>
  );
}

import axios from "axios";
import { useState, useEffect } from "react";
import { Animal } from "./animals";
import { animalEmojies, AnimalKind } from "../components/AnimalsList";

const filteringAnimals2 = () => {
  const [animalState, setAnimalState] = useState<Animal[] | null>(null);
  const [filterState, setFilterState] = useState<AnimalKind | "all">("all");
  useEffect(() => {
    const getAnimalsFromApi = async () => {
      const response = await axios.get(
        "https://reader.mindmingle.nl/api/exercises/react/animals"
      );
      setAnimalState(response.data);
    };
    getAnimalsFromApi();
  }, []);

  if (!animalState) {
    return <p>Loading...</p>;
  }

  const animalKindArray = animalState.map((animal) => animal.kind);
  const uniqueKindArray = Array.from(new Set(animalKindArray));

  return (
    <div>
      {uniqueKindArray.map((aKind) => {
        return (
          <button key={aKind} onClick={() => setFilterState(aKind)}>
            Show {aKind}s
          </button>
        );
      })}
      <button onClick={() => setFilterState("all")}>Show all animals</button>
      {animalState
        .filter(
          (animal) => animal.kind === filterState || filterState === "all"
        )
        .map((animal) => {
          return (
            <div key={animal.id}>
              <p>
                {animalEmojies[animal.kind]} {animal.name}
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default filteringAnimals2;

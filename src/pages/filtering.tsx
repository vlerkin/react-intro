import axios from "axios";
import { useState, useEffect } from "react";
import { Animal } from "./animals";
import { animalEmojies, AnimalKind } from "../components/AnimalsList";

const filteringAnimals = () => {
  const [animalState, setAnimalState] = useState<Animal[] | null>(null);
  const [filterState, setFilterState] = useState<Animal[] | null>(null);
  useEffect(() => {
    const getAnimalsFromApi = async () => {
      const response = await axios.get(
        "https://reader.mindmingle.nl/api/exercises/react/animals"
      );
      setAnimalState(response.data);
      setFilterState(response.data);
    };
    getAnimalsFromApi();
  }, []);

  if (!animalState || !filterState) {
    return <p>Loading...</p>;
  }
  const handleClick = (kind: AnimalKind | "all") => {
    if (kind === "all") {
      return setFilterState(animalState);
    } else {
      const newState = animalState.filter((animal) => animal.kind === kind);
      return setFilterState(newState);
    }
  };
  const animalKindArray = animalState.map((animal) => animal.kind);
  const uniqueKindArray = Array.from(new Set(animalKindArray));

  return (
    <div>
      {uniqueKindArray.map((aKind) => {
        return (
          <button key={aKind} onClick={() => handleClick(aKind)}>
            Show {aKind}s
          </button>
        );
      })}
      <button onClick={() => handleClick("all")}>Show all animals</button>
      {filterState.map((animal) => {
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

export default filteringAnimals;

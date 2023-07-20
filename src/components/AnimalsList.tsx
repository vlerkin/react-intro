//import animals from '../data/animals.json';
import axios from "axios";
import { useState, useEffect } from "react";
import { Animal } from "../pages/animals";

export type AnimalKind = "cow" | "chicken" | "pig" | "sheep";
export interface AnimalListProps {
  kind: AnimalKind;
}

export const animalEmojies = {
  cow: "🐮",
  chicken: "🐔",
  pig: "🐷",
  sheep: "🐑",
};

const AnimalsList = (props: AnimalListProps) => {
  const [animals, setAnimals] = useState<Animal[]>([]);
  useEffect(() => {
    const getAnimalsFromApi = async () => {
      const animal = await axios.get(
        "https://reader.mindmingle.nl/api/exercises/react/animals"
      );
      setAnimals(animal.data);
    };

    getAnimalsFromApi();
  }, []);

  return (
    <>
      {animals
        .filter((animal) => animal.kind === props.kind)
        .map((animal) => (
          <p>
            {animalEmojies[props.kind]} {animal.name}
          </p>
        ))}
    </>
  );
};

export default AnimalsList;

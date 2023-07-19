//import animals from '../data/animals.json';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Animal } from '../pages/animals';

interface animalKind {
    kind: "cow" | "chicken" | "pig" | "sheep";
}

export const animalEmojies = { "cow":"🐮", "chicken":"🐔", "pig":"🐷", "sheep":"🐑"}

const AnimalsList = (props: animalKind) => {
    const [animals, setAnimals] = useState<Animal[]>([]);
    useEffect(() => {
        const getAnimalsFromApi = async () => {
          const animals = await axios.get(
            "https://reader.mindmingle.nl/api/exercises/react/animals"
          );
          setAnimals(animals.data);
        };
     
        getAnimalsFromApi();
      }, []);
    
    return (<>{animals
    .filter((animal) => animal.kind === props.kind)
    .map((animal) => <p>{animalEmojies[props.kind]} {animal.name}</p>)}
    </>);
    
}

export default AnimalsList;
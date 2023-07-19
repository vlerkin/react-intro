
import { useRouter } from "next/router";
import animalsJson from '../../data/animals.json';
import { Animal } from '../animals';
import { animalEmojies } from '../../components/AnimalsList';
import { useState, useEffect } from "react";
import axios from 'axios';

const pageOfAnAnimal = () => {

    
    const animals = animalsJson as Animal[]
    const [animalState, setAnimalState] = useState(animals);

    const router = useRouter();
    const idFromUrl = Number(router.query.id);
   
    useEffect(() => {
        const getAnimalFromApi = async () => {
            const idFromUrlIsNumber = !Number.isNaN(idFromUrl)
            
            if (idFromUrlIsNumber) {
                const animal = await axios.get(
                `https://reader.mindmingle.nl/api/exercises/react/animals/${idFromUrl}`
                );
                setAnimal(animal.data);
            }
        };
     
        getAnimalFromApi();
      }, [idFromUrl]);

    const [animal, setAnimal] = useState<Animal | null>(null);
    //calling an animal object for every request with a different URL

    useEffect(() => {
        console.log("🌾 Yummy!");
    }, [animalState]);

    
    const fedAnimals =() => {
        const feedAnimal = animalState.map((animal) => {
            const newAnimal = {...animal, hasBeenFed:true};
            return newAnimal;
        })
        setAnimalState(feedAnimal);
    };
 
    
    if (!animal) {
        return <p>No animal</p>
    }

    return (
        <div>
            Test
            <h1>{ animal.name} the {animal.kind} {animalEmojies[animal.kind]}</h1>
            <p>{`I am ${animal.age} years old!`}</p>
            <p>{animal.hasBeenFed === true? "😊 I am happy and fed": "🌾 Hungry, give me some food!"}</p>
            {(!animal.hasBeenFed) && <button onClick={fedAnimals}>Feed me</button>}
            <p>{animal.age <= 2 ? "[young]": "[old]"}</p>
        </div>
    )
}

export default pageOfAnAnimal;
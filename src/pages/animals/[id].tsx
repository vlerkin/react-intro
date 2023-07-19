
import { useRouter } from "next/router";
import animalsJson from '../../data/animals.json';
import { Animal } from '../animals';
import { animalEmojies } from '../../components/AnimalsList';

const pageOfAnAnimal = () => {
    const animals = animalsJson as Animal[]
    const router = useRouter();
    const idFromUrl = Number(router.query.id);
    const animalFromUrl = animals.find((animal) => animal.id === idFromUrl);
    if (!animalFromUrl) {
        return <p>No animal</p>
    }
    
    // const kindOfAnimal = animalFromUrl.kind as AnimalKind;

    return (
        <div>
            <h1>{ animalFromUrl.name} the {animalFromUrl.kind} {animalEmojies[animalFromUrl.kind]}</h1>
            <p>{`I am ${animalFromUrl.age} years old!`}</p>
            <p>{animalFromUrl.hasBeenFed === true? "😊 I am happy and fed": "🌾 Hungry, give me some food!"}</p>
            <p>{animalFromUrl.age <= 2 ? "[young}": "[old]"}</p>
        </div>
    )
}

export default pageOfAnAnimal;
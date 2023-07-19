
import { useRouter } from "next/router";
import animalsJson from '../../data/animals.json';
import { Animal } from '../animals';
import { animalEmojies } from '../../components/AnimalsList';
import { useState, useEffect } from "react";

const pageOfAnAnimal = () => {

    
    const animals = animalsJson as Animal[]
    const [animalState, setAnimalState] = useState(animals);
    //const [count, setCount] = useState(0);

    const router = useRouter();
    const idFromUrl = Number(router.query.id);
    const animalFromUrl = animalState.find((animal) => animal.id === idFromUrl);


    // /*
    // const clickHadlerIncrease = () => {
    //     setCount(count + 1);
    //     window.alert("You've clicked me and INCREASED the counter!")
    // };
    // const clickHadlerDecrease = () => {
    //     setCount(count - 1);
    //     window.alert("You've clicked me and DECREASED the counter!")
    // };
    // */
    
    const fedAnimals =() => {
        const feedAnimal = animalState.map((animal) => {
            const newAnimal = {...animal, hasBeenFed:true};
            return newAnimal;
        })
        setAnimalState(feedAnimal);
    };

    useEffect(() => {
        console.log("🌾 Yummy!");
    }, [animalState]);
 
    
    if (!animalFromUrl) {
        return <p>No animal</p>
    }


    return (
        <div>
            Test
            <h1>{ animalFromUrl.name} the {animalFromUrl.kind} {animalEmojies[animalFromUrl.kind]}</h1>
            <p>{`I am ${animalFromUrl.age} years old!`}</p>
            <p>{animalFromUrl.hasBeenFed === true? "😊 I am happy and fed": "🌾 Hungry, give me some food!"}</p>
            {(!animalFromUrl.hasBeenFed) && <button onClick={fedAnimals}>Feed me</button>}
            <p>{animalFromUrl.age <= 2 ? "[young]": "[old]"}</p>
        </div>
    )
}

export default pageOfAnAnimal;
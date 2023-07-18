
import { useRouter } from "next/router";
import {animals} from '../animals';
import {Animal} from '../animals';

const pageOfAnAnimal = () => {
    const animalEmojies = { "cow":"🐮", "chicken":"🐔", "pig":"🐷", "sheep":"🐑"}
    const router = useRouter();
    const { id } = router.query;
    if (!id || typeof id !== 'string') {
        return <p>There is no animal with this ID</p>
    };
    const idFromUrl = parseInt(id);
    const animalFromUrl = animals.find((animal:Animal) => animal.id === idFromUrl);
    if (!animalFromUrl) {
        return <p>No animal</p>
    }
    return (
        <div>
            <h1>{ animalFromUrl.name} the {animalFromUrl.kind} {animalEmojies[animalFromUrl.kind]}</h1>
            <p>{`I am ${animalFromUrl.age} years old!`}</p>
            {animalFromUrl.hasBeenFed === true? <p>😊 I am happy and fed</p>: <p>🌾 Hungry, give me some food!</p>}
        </div>
    )
}

export default pageOfAnAnimal;
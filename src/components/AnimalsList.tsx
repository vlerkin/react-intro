import { animals } from '../pages/animals';

interface animalKind {
    kind: "cow" | "chicken" | "pig" | "sheep";
}

const AnimalsList = (props: animalKind) => {
    const animalEmojies = { "cow":"🐮", "chicken":"🐔", "pig":"🐷", "sheep":"🐑"}
    return (<>{animals
    .filter((animal) => animal.kind === props.kind)
    .map((animal) => <p>{animalEmojies[props.kind]} {animal.name}</p>)}
    </>);
    
}

export default AnimalsList;
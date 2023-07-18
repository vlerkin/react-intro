import AnimalsList from '../components/AnimalsList';

type AnimalKind = "cow" | "sheep" | "chicken" | "pig";
 
export interface Animal {
  id: number;
  name: string;
  kind: AnimalKind;
  age: number;
  hasBeenFed: boolean;
}
 
 export const animals: Animal[] = [
  { id: 1, name: "Bessie", kind: "cow", age: 4, hasBeenFed: false },
  { id: 2, name: "Dolly", kind: "sheep", age: 2, hasBeenFed: true },
  { id: 3, name: "Cluck", kind: "chicken", age: 1, hasBeenFed: true },
  { id: 4, name: "Porky", kind: "pig", age: 3, hasBeenFed: false },
  { id: 5, name: "Maggie", kind: "cow", age: 5, hasBeenFed: true },
  { id: 6, name: "Bo", kind: "sheep", age: 1, hasBeenFed: false },
  { id: 7, name: "Nugget", kind: "chicken", age: 2, hasBeenFed: false },
  { id: 8, name: "Wilbur", kind: "pig", age: 2, hasBeenFed: true },
  { id: 9, name: "Bella", kind: "cow", age: 7, hasBeenFed: true },
  { id: 10, name: "Fluffy", kind: "sheep", age: 3, hasBeenFed: true },
  { id: 11, name: "Wings", kind: "chicken", age: 1, hasBeenFed: false },
  { id: 12, name: "Babe", kind: "pig", age: 1, hasBeenFed: true },
  { id: 13, name: "Moo", kind: "cow", age: 3, hasBeenFed: false },
  { id: 14, name: "Fleece", kind: "sheep", age: 4, hasBeenFed: false },
  { id: 15, name: "Feathers", kind: "chicken", age: 2, hasBeenFed: true },
  { id: 16, name: "Piglet", kind: "pig", age: 4, hasBeenFed: true }
];

const animalFromFind = animals.find((animal) => animal.name === "Feathers");

const Animals = () => {
    return (
      <div>
        <h1>Welcome to the farm!</h1>
        {(!animalFromFind) ? null : <h2>Today in the spotlight: {animalFromFind.name} the {animalFromFind.kind}</h2>} 
        <ul>
          {animals
          .filter((animal) => animal.kind === "cow")
          .sort((a,b) => a.age-b.age)
          .map((animal) => {
            return (
              <li key={animal.id}>
                <h2>{animal.name}</h2>
                <p>{`I am a ${animal.age} year old ${animal.kind}!`}</p>
                {animal.hasBeenFed ? <p>I am happy 😌</p> : <p>I am hungry 🥺</p>}
              </li>
            );
          })}
        </ul>
        <AnimalsList kind="cow" />
      </div>
    );
  };
 
export default Animals;
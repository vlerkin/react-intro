import NavigationalBar from "@/components/navigation";
import MyFooter from "@/components/footer";
import Image from "next/image";
import { Animal } from "./animals";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const Home = () => {
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

  const animalKinds = animals.map((animal) => animal.kind);
  const uniqueAnimalKinds = Array.from(new Set(animalKinds));

  return (
    <div>
      <Image src="/me.jpg" alt="a retriver" width="84" height="64" />
      <div>
        <h1>Hello World!</h1>
        <NavigationalBar />
      </div>
      <div>
        {uniqueAnimalKinds.map((animalKind) => {
          return <Link href={`${animalKind}`}>{animalKind}</Link>;
        })}
      </div>
      <MyFooter />
    </div>
  );
};

export default Home;

import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Animal } from "../animals";
import Link from "next/link";

const animalsByKind = () => {
  const router = useRouter();
  const kindFromUrl = router.query.animalsAll;
  const [animalState, setAnimalState] = useState<Animal[]>([]);
  useEffect(() => {
    const getAnimalFromAPI = async () => {
      const response = await axios.get(
        "https://reader.mindmingle.nl/api/exercises/react/animals"
      );
      setAnimalState(response.data);
    };
    getAnimalFromAPI();
  }, []);
  const animalsOfTheKind = animalState.filter(
    (animal) => animal.kind === kindFromUrl
  );

  return (
    <div>
      {animalsOfTheKind.map((animal) => {
        return <Link href={`/${animal.kind}/${animal.id}`}>{animal.name}</Link>;
      })}
    </div>
  );
};

export default animalsByKind;

import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Animal } from "../animals";

const animalProfile = () => {
  const [animalState, setAnimalState] = useState<Animal | null>(null);
  const router = useRouter();
  const idFromUrl = Number(router.query.animalId);
  useEffect(() => {
    const getAnimalFromApi = async () => {
      const idFromUrlIsNumber = !Number.isNaN(idFromUrl);

      if (idFromUrlIsNumber) {
        const animal = await axios.get(
          `https://reader.mindmingle.nl/api/exercises/react/animals/${idFromUrl}`
        );
        setAnimalState(animal.data);
      }
    };

    getAnimalFromApi();
  }, [idFromUrl]);

  if (!animalState) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h1>Welcome to the page of {animalState.name}</h1>
      <img
        src={animalState.imgUrl}
        alt="a profile picture"
        width="200"
        height="200"
      />
      <h2>I am this {animalState.age} old</h2>
    </div>
  );
};

export default animalProfile;

import NavigationalBar from '@/components/navigation';
import AnimalsList from '../components/AnimalsList';

const Chickens = () => {
    return (
        <div>
            <NavigationalBar />
            <h1>Here are the chickens of our farm!</h1>
            <AnimalsList kind="chicken" />
        </div>
    )
}

export default Chickens;
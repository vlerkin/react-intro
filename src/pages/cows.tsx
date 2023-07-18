import NavigationalBar from '@/components/navigation';
import AnimalsList from '../components/AnimalsList';

const Cows = () => {
    return (
        <div>
            <NavigationalBar />
            <h1>Here are the cows of our farm!</h1>
            <AnimalsList kind="cow" />
        </div>
    )
}

export default Cows;
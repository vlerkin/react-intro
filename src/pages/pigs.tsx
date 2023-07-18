import NavigationalBar from '@/components/navigation';
import AnimalsList from '../components/AnimalsList';

const Pigs = () => {
    return (
        <div>
            <NavigationalBar />
            <h1>Here are the pigs of our farm!</h1>
            <AnimalsList kind="pig" />
        </div>
    )
}

export default Pigs;
import NavigationalBar from '@/components/navigation';
import AnimalsList from '../components/AnimalsList';

const Sheep = () => {
    return (
        <div>
            <NavigationalBar />
            <h1>Here are the sheep of our farm!</h1>
            <AnimalsList kind="sheep" />
        </div>
    )
}

export default Sheep;
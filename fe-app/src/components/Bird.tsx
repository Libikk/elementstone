import { BirdType } from './BirdsList';

interface Props {
    bird: BirdType
}


const Bird: React.FC<Props> = ({ bird }) => {
    return <div>
        <div>{bird.name}</div>
        <img src={bird.image} alt={bird.name} />
    </div>
}

export default Bird;

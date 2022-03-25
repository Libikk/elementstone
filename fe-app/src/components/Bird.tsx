import { BirdType } from './BirdsList';

interface Props {
    bird: BirdType
}


const Bird: React.FC<Props> = ({ bird }) => {
    return <div>
        <div>{bird.name}</div>
        <div>{bird.description}</div>
        <img src={bird.img} alt={bird.name} />
    </div>
}

export default Bird;

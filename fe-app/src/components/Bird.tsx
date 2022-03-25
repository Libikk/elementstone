import { BirdType } from './BirdsList';

interface Props {
    bird: BirdType
}


const Bird: React.FC<Props> = ({ bird }) => {
    return <div className='bird'>
        <div className='bird__name'>{bird.name}</div>
        <div className='bird__description'>{bird.description}</div>
        <img src={bird.img} alt={bird.name} />
    </div>
}

export default Bird;

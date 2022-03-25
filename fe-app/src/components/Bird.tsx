import { BirdType } from './BirdsList';

interface Props {
    bird: BirdType
}


const Bird: React.FC<Props> = ({ bird }) => {
    return <div className='bird'>
        <div className='bird-details'>
            <div className='name'>{bird.name}</div>
            <div className='description'>{bird.description}</div>
        </div>
        <img className='img' src={bird.img} alt={bird.name} />
    </div>
}

export default Bird;

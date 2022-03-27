import style from './Birds.module.scss';
export interface BirdType {
    name: string
    description: string
    img: string
}
interface Props {
    bird: BirdType
}


const Bird: React.FC<Props> = ({ bird }) => {
    return <div className={style.bird}>
        <img className={style.img} src={bird.img} alt={bird.name} />
        <div className={style.birdDetails}>
            <div className={style.birdDetails_name}>{bird.name}</div>
            <div className={style.birdDetails_description}>{bird.description}</div>
        </div>
    </div>
}

export default Bird;

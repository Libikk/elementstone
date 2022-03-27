import { useEffect, useState } from "react";
import Bird, { BirdType } from "../Bird";
import style from './BirdsList.module.scss';

const BirdsList: React.FC = () => {
    const [birds, setBirds] = useState<BirdType[]>([])

    const getBirds = async () => {
        const res = await fetch('http://localhost:9090/birds');
        const data:BirdType[] = await res.json();
        setBirds(data);
    }

    useEffect(() => {
        getBirds();
    }, [])
    return <div className={style.birdsWrapper}>
        <div className={style.birdsList}>
            {birds ? birds.map(bird => <Bird key={bird.name} bird={bird} />): 'Loading birds!'}
        </div>
    </div>
}

export default BirdsList;

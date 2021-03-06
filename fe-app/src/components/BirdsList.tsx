import { useEffect, useState } from "react";
import Bird from "./Bird";

export interface BirdType {
    name: string
    description: string
    img: string
}

const BirdsList: React.FC = () => {
    const [birds, setBirds] = useState<BirdType[]>([])

    const getBirds = async () => {
        fetch('http://localhost:9090/birds')
            .then(res => res.json())
            .then(data => setBirds(data))
            // .then(setBirds)
    }

    useEffect(() => {
        getBirds();
    }, [])
    return <div className="birds-wrapper">
        <div className="birds-list">
            {birds ?  birds.map(bird => <Bird bird={bird} />): 'Loading birds!'}
        </div>
    </div>
}

export default BirdsList;

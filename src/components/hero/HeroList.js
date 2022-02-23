import React, { useMemo } from 'react'
import getHeroesByPublisher from '../../selectors/getHeroesByPublisher'
import HeroCard from './HeroCard';

const HeroList = ({ publisher }) => {

    console.log(publisher)

    const heroes = useMemo(() => {
        return getHeroesByPublisher(publisher);
    }, [publisher]);

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn">
            {
                heroes.map(hero => (
                    <HeroCard
                        key={hero.id}
                        {...hero}
                    >
                    </HeroCard>
                ))
            }
        </div>
    )
}

export default HeroList
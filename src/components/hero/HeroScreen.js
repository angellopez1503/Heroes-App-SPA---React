import React from 'react'
import { useParams,Navigate } from 'react-router-dom'
import getHeroById from '../../selectors/getHeroById';


const HeroScreen = () => {

  const { heroeId } = useParams();
  
  const hero = getHeroById(heroeId);
 

  if (!hero) {
    return <Navigate to="/" />
  }

  


  return (
      <div>
      <h1>HeroScreen</h1>
      <p>
        {hero.superhero}
      </p>
    </div>
  )
}

export default HeroScreen
import { heroes } from "../data/heroes";


const getHeroesByName = (name = '') => {

    console.log('getHeroesByName')
    
    if (name.length === 0) {
        return [];
    }
    
    name = name.toLowerCase();
    
    return heroes.filter(hero => hero.superhero.toLowerCase().includes(name));

    

}

export default getHeroesByName;
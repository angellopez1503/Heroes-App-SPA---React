import { heroes } from "../data/heroes"

const getHeroesByPublisher = (publisher) => {

    console.log('sasasasasasas')

    const validPublishers = ['Marvel Comics', 'DC Comics'];

    if (!validPublishers.includes(publisher)) {
        throw new Error(`${publisher} is not a valid publisher`);
    }
    
    return heroes.filter(hero => hero.publisher === publisher);

}

export default getHeroesByPublisher;
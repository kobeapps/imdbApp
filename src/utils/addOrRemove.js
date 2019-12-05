import { getData, storeData } from './AsyncStorage';

export async function addOrRemoveHelper(movie) {
    let favourites = await getData('favourites');
    favourites = JSON.parse(favourites);
    if (favourites[movie.imdbID]) {
        delete favourites[movie.imdbID];
    } else {
        favourites[movie.imdbID] = movie;
    }
    await storeData('favourites', JSON.stringify(favourites));
    return favourites;
}
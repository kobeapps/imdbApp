import {combineReducers} from 'redux';
import movie from './movie';
import movieDetails from './movieDetails';

export default combineReducers({
    movie,
    movieDetails
});
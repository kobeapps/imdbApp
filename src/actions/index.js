import axios from 'axios';
import { REQUEST_MOVIES_BY_NAME, REQUEST_MOVIE_DETAILS_BY_ID } from './constants';
import { IMDB_KEY } from '../../config/keys';

export const getMoviesByTitle = (title) => async dispatch =>  {
    const response = await axios.get(`http://www.omdbapi.com/?apikey=${IMDB_KEY}&s=${title}`);
    dispatch({ type: REQUEST_MOVIES_BY_NAME, payload: response.data });
}

export const getMovieDetailsById = (imdbID) => async dispatch => {
    const response = await axios.get(`http://www.omdbapi.com/?apikey=${IMDB_KEY}&i=${imdbID}`);
    dispatch({ type: REQUEST_MOVIE_DETAILS_BY_ID, payload: response.data });
}
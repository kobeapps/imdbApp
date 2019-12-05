import { REQUEST_MOVIE_DETAILS_BY_ID } from '../actions/constants';

export default function (state = null, action) {
    switch(action.type) {
        case REQUEST_MOVIE_DETAILS_BY_ID:
            return { ...state, movieDetails: action.payload };
        default:
            return state;
    }
}
import { REQUEST_MOVIES_BY_NAME } from '../actions/constants';

export default function (state = null, action) {
    switch(action.type) {
        case REQUEST_MOVIES_BY_NAME:
            return { ...state, movieList: action.payload };
        default:
            return state;
    }
}
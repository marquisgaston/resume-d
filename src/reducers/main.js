import {
    SET_CURRENT_PAGE,
    SET_SEARCH_TERM
} from '../actions/types';

const INITIAL_STATE = {
    currentPage: null,
    searchTerm: null,
    searchYoutube: true
}

export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
        case SET_CURRENT_PAGE: 
            return {
                ...state,
                currentPage: action.payload
            }
        case SET_SEARCH_TERM:
            return {
                ...state,
                searchTerm: action.payload
            }
        default: return state
    }
}
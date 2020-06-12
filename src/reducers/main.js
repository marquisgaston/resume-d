import {
    SET_CURRENT_PAGE,
    SET_SEARCH_TERM,
    SET_TABS_MARGIN,
    PULL_YOUTUBE_ITEMS
} from '../actions/types';

const INITIAL_STATE = {
    currentPage: null,
    searchTerm: null,
    youtubeItems: []
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
        case SET_TABS_MARGIN:
            return {
                ...state,
                tabsMargin: action.payload
            }
        case PULL_YOUTUBE_ITEMS:
            return {
                ...state,
                youtubeItems: action.payload
            }
        default: return state
    }
}
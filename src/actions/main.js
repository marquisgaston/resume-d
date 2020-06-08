import {
    SET_CURRENT_PAGE,
    SET_SEARCH_TERM
} from './types';

export function setCurrentPage (page){
    return ({
        type: SET_CURRENT_PAGE,
        payload: page
    })
}

export function setSearchTerm (searchTerm){
    return ({
        type: SET_SEARCH_TERM,
        payload: searchTerm
    })
}
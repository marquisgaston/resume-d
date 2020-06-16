import {
    SET_CURRENT_PAGE,
    SET_SEARCH_TERM,
    SET_TABS_MARGIN,
    RUN_FUNCTION
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

export function setTabsMargin (){
    var tabsMargin = document.getElementsByClassName("MuiPaper-root")[0].clientHeight;
    return ({
        type: SET_TABS_MARGIN,
        payload: tabsMargin
    })
}

export function runFunction (runThis) {

    return ({
        type: RUN_FUNCTION,
        payload: runThis
    })
}
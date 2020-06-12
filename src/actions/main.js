import axios from 'axios';
import {
    SET_CURRENT_PAGE,
    SET_SEARCH_TERM,
    SET_TABS_MARGIN,
    PULL_YOUTUBE_ITEMS
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

export function pullYoutubeItems () {
    const youtubeList = [];
        axios
            .get(`https://jsonplaceholder.typicode.com/posts`)
                .then(res => {
                    console.log("res", res.data)
                    res.data.map(item => youtubeList.push(item))
                    console.log('list', youtubeList)
                    
            })
        
    return ({
        type: PULL_YOUTUBE_ITEMS,
        payload: youtubeList
    })
}
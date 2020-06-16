import {
    PULL_YOUTUBE_ITEMS
} from './types';

export function pullYoutubeItems(searchTerm){


    return {
        type: PULL_YOUTUBE_ITEMS,
        payload: searchTerm
    }
}
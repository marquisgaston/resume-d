import {
    PULL_YOUTUBE_ITEMS
} from './types';

import axios from 'axios';

export function pullYoutubeItems(searchTerm){


    return {
        type: PULL_YOUTUBE_ITEMS,
        payload: searchTerm
    }
}
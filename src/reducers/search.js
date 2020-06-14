import {
    PULL_YOUTUBE_ITEMS
} from '../actions/types';

const INITIAL_STATE = {
    youtubeItems: ['one', 'two'],
    filteredResumeResults: ["resume results go here"]
}

export default function (state = INITIAL_STATE, actions){
    switch(actions.type){
        case PULL_YOUTUBE_ITEMS:
            return {
                ...state,
                youtubeItems: actions.payload
            }

        default: return state
    }
}
import { combineReducers } from 'redux';

import main from './main';
import resumeData from './resumeData';
import search from './search';

const rootReducer = combineReducers({
    main,
    resumeData,
    search
});

export default rootReducer;
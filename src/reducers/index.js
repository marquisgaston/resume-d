import { combineReducers } from 'redux';

import main from './main';
import resumeData from './resumeData';

const rootReducer = combineReducers({
    main,
    resumeData
});

export default rootReducer;
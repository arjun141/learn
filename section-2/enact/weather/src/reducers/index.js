import {combineReducers} from 'redux';

import {cities} from './city';
import {weathers} from './weather';

export default combineReducers({
    cities,
    weathers
})

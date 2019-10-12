//Imports
import { combineReducers } from 'redux';
import postsReducer from './postsReducer';

//Export
export default combineReducers({
    posts : postsReducer
});

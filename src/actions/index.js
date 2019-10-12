//Imports
import jsonPlaceholder from '../apis/jsonPlaceholder';

//Exports actions
export const fetchPosts = () => {
    //Returns function rather than object
    return async (dispatch, getState) => {
        const response = await jsonPlaceholder.get('/posts');
        dispatch({ type: 'FETCH_POSTS', payload: response });
    }
};


import axios from 'axios';
export const ERR_FETCHING = 'ERR_FETCHING';

export const fetchNotes = () => {
    return dispatch => {
        axios
            .catch(err => {
                dispatch({type: ERR_FETCHING, payload: err});
            })
    };
};
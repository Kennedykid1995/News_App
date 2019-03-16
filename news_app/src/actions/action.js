import axios from 'axios';
export const FETCH_NEWS = 'FETCH_NOTES';
export const ERR_FETCHING = 'ERR_FETCHING';

const URL = 'http://localhost:4000/articles';

export const fetchNews = () => {
    return dispatch => {
        axios
        .get(`${URL}`)
        .then(({data}) => {
            dispatch({type: FETCH_NEWS, payload: data});
        })
            .catch(err => {
                dispatch({type: ERR_FETCHING, payload: err});
            })
    };
};
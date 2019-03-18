import axios from 'axios';
export const FETCH_NEWS = 'FETCH_NEWS';
export const ERR_FETCHING = 'ERR_FETCHING';

const URL = 'https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=dfe7f9ef5f1046f9aeb896d14185f753';

export const fetchNews = () => {
    return dispatch => {
        axios
        .get(`${URL}`)
        .then(({data}) => {
            console.log(data)
            dispatch({type: FETCH_NEWS, payload: data});
        })
        .catch(err => {
            dispatch({type: ERR_FETCHING, payload: err});
        })
    };
};
import {
    ERR_FETCHING,
    FETCH_NEWS,
} from '../actions/action';

const currentState = {
    news: [],
    error: null,
}

const reducers = (state = currentState, action) =>{
    switch(action.type){
        case ERR_FETCHING:
        return{
            ...state,
            error: action.payload,
        };
        case FETCH_NEWS:
        return{
            ...state,
            news: action.payload,
        };
        default:
        return state;
    }
}
 
export default reducers;

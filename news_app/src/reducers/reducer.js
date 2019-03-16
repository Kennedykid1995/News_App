import {
    ERR_FETCHING,
    FETCH_NEWS,
} from '../actions/action';

const currentState ={
    news: [],
}

const reducers = (state = currentState, action) =>{
    switch(action.type){
        case ERR_FETCHING:
        return{
            ...state,
            error: action.payload
        };
        case FETCH_NEWS:
        return{
            ...state,
            news: action.payload,
        }
    }
}
 
export default reducers;

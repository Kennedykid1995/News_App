import {
    ERR_FETCHING,
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
        }
    }
}
 
export default reducers;

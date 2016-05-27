import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import communityReducer from '../reducers/communityReducer'


// Combine Reducers
var reducers = combineReducers({
    communityReducer: communityReducer
});

// Create Store
var store = createStore(
    reducers,
    applyMiddleware(thunk)
);



export default store;
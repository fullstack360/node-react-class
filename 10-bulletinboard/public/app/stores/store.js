import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import communityReducer from '../reducers/communityReducer'
import accountReducer from '../reducers/accountReducer'


// Combine Reducers
var reducers = combineReducers({
    communityReducer: communityReducer,
    accountReducer: accountReducer
});

// Create Store
var store = createStore(
    reducers,
    applyMiddleware(thunk)
);



export default store;
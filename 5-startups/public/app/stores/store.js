import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import startupReducer from '../reducers/startupReducer'


// Combine Reducers
var reducers = combineReducers({
    startupReducer: startupReducer
});

// Create Store
var store = createStore(
    reducers,
    applyMiddleware(thunk)
);



export default store;

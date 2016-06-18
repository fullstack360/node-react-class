import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import communityReducer from '../reducers/communityReducer'
import accountReducer from '../reducers/accountReducer'
import postReducer from '../reducers/postReducer'


// Combine Reducers
var reducers = combineReducers({
    communityReducer: communityReducer,
    accountReducer: accountReducer,
    postReducer: postReducer
})


// Create Store
var store = createStore(
    reducers,
    applyMiddleware(thunk)
)



export default store
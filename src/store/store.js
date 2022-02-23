import {createStore,applyMiddleware,compose} from 'redux'
import RootReducer from "./Reducers/RootReducer"

const thunkMiddleware=require('redux-thunk').default
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(RootReducer,composeEnhancers(
    applyMiddleware(thunkMiddleware)
  ));
export default store;
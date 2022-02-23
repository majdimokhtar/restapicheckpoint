import { applyMiddleware, createStore, compose } from 'redux';
import contactReducer from '../reducers/contactReducers';
import thunk from 'redux-thunk';

const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;
export const store =createStore(
    contactReducer,
    composeEnhancer(applyMiddleware(thunk))
);

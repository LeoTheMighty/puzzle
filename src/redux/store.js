import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import puzzle from "./reducers/puzzleReducer";
import {reduxLog} from "../Constants";

let middleware;
if (reduxLog) {
    middleware = applyMiddleware(logger, thunk);
}
else {
    middleware = applyMiddleware(thunk);
}

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers({
        puzzle,
    }),
    composeEnhancers(middleware)
);

export default store;

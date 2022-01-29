import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { searchRobots, requestRobots } from './store/reducers';
import { createLogger } from 'redux-logger';
import ThunkMiddleware from 'redux-thunk';

const logger = createLogger();

// create the redux store
const rootReducer = combineReducers({ searchRobots, requestRobots })
const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware, logger)); // normally we create a rootReducer, that has all other reducers

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
// registerServiceWorker();

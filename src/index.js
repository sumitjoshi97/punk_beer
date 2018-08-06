import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers/beersReducer';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//redux deev tools - advanced for +async calls
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:null || compose;

//store for redux
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const app = (
    <Provider store={store}>
        <App/>
    </Provider>  
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
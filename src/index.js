import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { GET_ANIMALS } from './actions';
import { animalReplacer } from './utils/utils'



const reducer = ( state={ animals: [] }, action ) => {
    switch(action.type) {
        case GET_ANIMALS:
        return { animals: action.animals };

        default:
        return state;
    }
}


const store = createStore(reducer, applyMiddleware(animalReplacer));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

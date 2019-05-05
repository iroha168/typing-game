import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux';
import typingReducer from './reducers/typing'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const rootReducer =  combineReducers({
    typing: typingReducer
})

const store = createStore(rootReducer);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render( app , document.getElementById('root'));
serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './case-one/components/index.css';
import App from './case-one/components/App';
import postReducer from './case-one/reducers';
const store = createStore(postReducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root')
);
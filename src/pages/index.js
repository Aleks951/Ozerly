import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../../redux';
import '../styles/index.less';

import Home from '../components/Home';

export default () => {
    const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    return (
        <Provider store={store}>
            <Home />
        </Provider>
    );
};
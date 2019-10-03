import React from 'react';
import ReactDOM from 'react-dom';
import MineralApp from './MineralApp';

import { Provider } from 'react-redux';
import store from './redux/store';

const rootElement = document.getElementById('root')

ReactDOM.render(
    <Provider store={store}>
        <MineralApp />
    </Provider>,
    rootElement
)

//adding testing comments to check 
//with gitttt!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
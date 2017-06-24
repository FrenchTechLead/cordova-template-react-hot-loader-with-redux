import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/Hello';
import store from './store';
import {Provider} from 'react-redux';

// wrapping the root React Component by the Store Provider will make the store available on every child component.
ReactDOM.render(<Provider store={store}> 
                    <Hello />
                </Provider>, document.getElementById('app'));

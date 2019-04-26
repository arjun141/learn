import React from 'react';
import {render} from 'react-dom';
import App from './App';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';

import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

const appElement = (
	<Provider store = {store}>
		<App />
	</Provider>);

// In a browser environment, render instead of exporting
if (typeof window !== 'undefined') {
	render(appElement, document.getElementById('root'));
}

export default appElement;

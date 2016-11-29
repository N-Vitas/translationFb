import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import App from './App';
import Settings from './Settings';

import './index.css';
import configureStore from './configureStore'
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store)
ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
      <Route path="/" component={App}>
      </Route>
      <Route path="settings" component={Settings}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);

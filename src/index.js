import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import App from './App';
import Demo from './Demo';

import './index.css';
import configureStore from './configureStore'
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store)
console.log(Demo);
ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
      <Route path="/" component={App}>
      </Route>
      <Route path="demo" component={Demo}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);

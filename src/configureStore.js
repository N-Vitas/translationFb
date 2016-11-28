import { createStore, combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { routerReducer } from 'react-router-redux'
import rootReducer from './reducers'

export default function configureStore(initialState) {
  // const store = createStore(rootReducer, initialState,applyMiddleware(thunk));
  const store = createStore(
	  combineReducers({
	    ...rootReducer,
	    routing: routerReducer
	  }),
	  initialState,
	  applyMiddleware(thunk)
	)
  // if (module.hot) {
  //   module.hot.accept('./reducers', () => {
  //     const nextRootReducer = require('./reducers')
  //     store.replaceReducer(nextRootReducer)
  //   })
  // }
  return store
}
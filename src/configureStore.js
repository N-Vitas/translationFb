import { createStore, combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { routerReducer } from 'react-router-redux'
import userstate from './reducers'

export default function configureStore(initialState) {
  const store = createStore(
	  combineReducers({
	    userstate,
	    routing: routerReducer
	  }),
	  applyMiddleware(thunk)
	)
  return store
}
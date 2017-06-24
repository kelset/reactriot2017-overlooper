import { routerReducer, routerMiddleware } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';

import { ApolloClient, createNetworkInterface } from 'react-apollo';

import reducers from './reducers';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

export const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://api.graph.cool/simple/v1/cj4b4erba2cdh0142bmipr8hf'
  })
});

const middlewares = [
  routerMiddleware(history), // intercepting and dispatching navigation actions
  client.middleware() // the apollo middleware
];

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger');

  middlewares.push(logger);
}

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
export const store = createStore(
  combineReducers({
    ...reducers,
    apollo: client.reducer(),
    router: routerReducer
  }),
  {}, // initial state
  compose(
    applyMiddleware(...middlewares),
    // If you are using the devToolsExtension, you can add it here also
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);

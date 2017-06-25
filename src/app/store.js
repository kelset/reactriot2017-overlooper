import { routerReducer, routerMiddleware } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';

import { ApolloClient, createNetworkInterface } from 'react-apollo';

import modal from '../modal/modalReducer';
import event from '../event/eventReducer';
import user from '../user/userReducer';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// export const client = new ApolloClient({
//   networkInterface: createNetworkInterface({
//     uri: 'https://api.graph.cool/simple/v1/cj4b4erba2cdh0142bmipr8hf'
//   })
// });

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj4b4erba2cdh0142bmipr8hf'
});

// use the auth0IdToken in localStorage for authorized requests
networkInterface.use([
  {
    applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {};
      }

      // get the authentication token from local storage if it exists
      if (localStorage.getItem('auth0IdToken')) {
        req.options.headers.authorization = `Bearer ${localStorage.getItem('auth0IdToken')}`;
      }
      next();
    }
  }
]);

export const client = new ApolloClient({ networkInterface });

const middlewares = [
  routerMiddleware(history), // intercepting and dispatching navigation actions
  client.middleware() // the apollo middleware
];

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger');

  middlewares.push(logger);
}

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

const reducers = combineReducers({
  modal,
  event,
  user,
  apollo: client.reducer(),
  router: routerReducer
});

export const store = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

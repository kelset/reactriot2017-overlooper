import React from 'react';
import { Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { ApolloProvider } from 'react-apollo';
import { ConnectedRouter } from 'react-router-redux';

import createHistory from 'history/createBrowserHistory';

import { store, client } from './store';

import UserProfile from '../user/UserProfile';
import Events from '../event/Events';

import './App.css';

// import logo from './logo.svg';
const history = createHistory();

const App = () =>
  (<ApolloProvider store={store} client={client}>
    {/* ConnectedRouter will use the store from Provider automatically */}
    <ConnectedRouter history={history}>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Main App</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>

        <div>
          <Route path="/" component={Events} />
          <Route path="/user" component={UserProfile} />
        </div>
      </div>
    </ConnectedRouter>
  </ApolloProvider>);

export default App;

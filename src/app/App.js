import React from 'react';
import { Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { ApolloProvider } from 'react-apollo';
import { ConnectedRouter } from 'react-router-redux';

import createHistory from 'history/createBrowserHistory';

import { store, client } from './store';

import Events from '../event/Events';
import UserProfile from '../user/UserProfile';
import EventProfile from '../event/EventProfile';

import Header from '../header/Header';
import CustomModal from '../modal/CustomModal';

const history = createHistory();

const App = () =>
  (<ApolloProvider store={store} client={client}>
    <ConnectedRouter history={history}>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Overlooper</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>

        <div>
          <CustomModal />
          <Header user="deneme" />
          <Route exact path="/" component={Events} />
          <Route path="/user" component={UserProfile} />
          <Route path="/event/:id" component={EventProfile} />
        </div>
      </div>
    </ConnectedRouter>
  </ApolloProvider>);

export default App;

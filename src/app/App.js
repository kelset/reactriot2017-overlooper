import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import User from '../user/User';
import Event from '../event/Event';
import Question from '../question/Question';

import './App.css';
// import logo from './logo.svg';

const App = () =>
  (<Router>
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Main App</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <ul>
        <li><Link to="/">User</Link></li>
        <li><Link to="/event">Event</Link></li>
        <li><Link to="/question">Question</Link></li>
      </ul>

      <hr />

      <Route path="/user" component={User} />
      <Route path="/event" component={Event} />
      <Route path="/question" component={Question} />
    </div>
  </Router>);

export default App;

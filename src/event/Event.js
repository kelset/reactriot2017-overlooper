import React from 'react';
import { Helmet } from 'react-helmet';

import Header from '../app/Header';

const Event = () =>
  (<div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Event</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <Header />
  </div>);

export default Event;

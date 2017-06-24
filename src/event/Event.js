import React from 'react';
import { Helmet } from 'react-helmet';

import Header from '../app/Header';
import EventHero from './EventHero';

const Event = () =>
  (<div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Event</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <Header />
    <EventHero />
  </div>);

export default Event;

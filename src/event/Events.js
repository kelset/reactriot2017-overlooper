import React from 'react';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';
import { gql, graphql } from 'react-apollo';

import Header from '../app/Header';
import EventHero from './EventHero';
import EventList from './EventList';
import { CardListContainer, SectionTitle } from './EventStyles';

const Events = ({ data: { allEvents } }) =>
  (<div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Event</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <Header />
    <EventHero />
    <CardListContainer className="container">
      <SectionTitle>Explore</SectionTitle>
      <EventList events={allEvents || []} />
    </CardListContainer>
  </div>);

Events.propTypes = {
  data: PropTypes.object.isRequired
};

export default graphql(gql`
  query AllEventsQuery {
    allEvents {
      id,
      title,
      startDate,
      endDate,
      participants
    }
  }
`)(Events);

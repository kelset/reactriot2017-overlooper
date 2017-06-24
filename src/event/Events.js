import React from 'react';
import PropTypes from 'prop-types';

import { gql, graphql } from 'react-apollo';

import Header from '../app/Header';
import EventHero from './EventHero';
import EventList from './EventList';
import { CardListContainer, SectionTitle } from './EventStyles';

const Events = ({ data: { allEvents } }) =>
  (<div>
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
      endDate
    }
  }
`)(Events);

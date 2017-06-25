import React from 'react';
import PropTypes from 'prop-types';

import { gql, graphql } from 'react-apollo';

import EventHero from './EventHero';
import EventList from './EventList';
import { dummyEvents } from './dummyEvents';
import { CardListContainer, SectionTitle } from './EventStyles';

const Events = ({ data: { allEvents } }) =>
  (<div>
    <EventHero />
    <CardListContainer>
      <SectionTitle>Explore</SectionTitle>
      <EventList events={allEvents || dummyEvents} />
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
      image,
      description,
      owner {
        id,
        name
      },
      participants {
        id,
        name
      }
    }
  }
`)(Events);

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import EventCard from './EventCard';

const EventCardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: -30px;
`;

const EventList = ({ events }) =>
  (<EventCardsWrapper>
    {events.map(event => <EventCard event={event} />)}
  </EventCardsWrapper>);

EventList.propTypes = {
  events: PropTypes.array.isRequired
};

export default EventList;

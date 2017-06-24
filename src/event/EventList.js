import React from 'react';
import PropTypes from 'prop-types';

import EventCard from './EventCard';

const EventList = ({ events }) =>
  (<div>
    {events.forEach(event => <EventCard event={event} />)}
  </div>);

EventList.propTypes = {
  events: PropTypes.array.isRequired
};

export default EventList;

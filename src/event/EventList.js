import React from 'react';
import EventCard from './EventCard';

const EventList = ({ events }) =>
  (<div>
    {events.forEach(event => <EventCard event={event} />)}
  </div>);

export default EventList;

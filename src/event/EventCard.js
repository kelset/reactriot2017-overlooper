import React from 'react';
import PropTypes from 'prop-types';

const EventCard = ({ event }) =>
  (<div>
    <h2>{event.name}</h2>
  </div>);

EventCard.propTypes = {
  event: PropTypes.obj.isRequired
};

export default EventCard;

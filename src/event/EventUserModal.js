import React from 'react';
import PropTypes from 'prop-types';

const EventUserModal = ({ user }) =>
  (<div>
    {user.name}
  </div>);

EventUserModal.propTypes = {
  user: PropTypes.object.isRequired
};

export default EventUserModal;

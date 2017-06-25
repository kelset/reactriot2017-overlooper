import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  SeekingPeopleImg,
} from './EventStyles';

const UserListWrapper = styled.div`
  width: 100%;
`;

const SeekingPeopleWrapper = styled.div`
  margin-top: 5px;
  font-size: 16px;
  color: #4be38a;
  cursor: pointer;
`;

const EventUserList = ({ users }) =>
  (
    <UserListWrapper>
      { users.map(user => (
        <SeekingPeopleWrapper key={user.name}>
          <SeekingPeopleImg src={user.image} alt={user.name} /> { user.name }
        </SeekingPeopleWrapper>
      )) }
    </UserListWrapper>
  );

EventUserList.propTypes = {
  users: PropTypes.array.isRequired
};

export default EventUserList;

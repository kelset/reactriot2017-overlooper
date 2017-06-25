import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setModal } from '../modal/modalActions';

import EventUserModal from './EventUserModal';

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

class EventUserList extends React.PureComponent {
  openUserModal(user) {
    this.props.setModal({
      children: (<EventUserModal user={user} />),
    });
  }
  render() {
    const { users } = this.props;
    return (<UserListWrapper>
      { users.map(user => (
        <SeekingPeopleWrapper onClick={() => this.openUserModal(user)} key={user.name}>
          <SeekingPeopleImg src={user.image} alt={user.name} /> { user.name }
        </SeekingPeopleWrapper>
      )) }
    </UserListWrapper>);
  }
}

EventUserList.propTypes = {
  users: PropTypes.array.isRequired,
  setModal: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch =>
bindActionCreators(
  {
    setModal,
  },
  dispatch,
);

export default connect(() => ({}), mapDispatchToProps)(EventUserList);

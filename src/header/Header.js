import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setModal } from '../modal/modalActions';
import { createEvent } from '../event/eventActions';
import CreateEventForm from '../create-event/CreateEventForm';

import { FlatOlButton, OlButton } from '../commonUI/OlButton';
import { APP_NAME } from '../constants';

import { Wrapper, HeaderRightFlatOlButton, HeaderLi, LogoHeaderLi, Logo } from './HeaderStyles';

class Header extends React.PureComponent {
  openEventModal() {
    this.props.setModal({
      children: (
        <CreateEventForm createEvent={this.props.createEvent} currentUser={this.props.user} />
      )
    });
  }

  render() {
    return (
      <Wrapper className="container">
        <HeaderLi>
          <FlatOlButton onClick={() => this.openEventModal()}>Create Event</FlatOlButton>
        </HeaderLi>
        <LogoHeaderLi>
          <Link to="/"><Logo>{APP_NAME}</Logo></Link>
        </LogoHeaderLi>
        <HeaderLi>
          <HeaderRightFlatOlButton>Login</HeaderRightFlatOlButton>
          <OlButton>Sign Up</OlButton>
        </HeaderLi>
      </Wrapper>
    );
  }
}

Header.propTypes = {
  user: PropTypes.object.isRequired,
  setModal: PropTypes.func.isRequired,
  createEvent: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setModal,
      createEvent
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Header);

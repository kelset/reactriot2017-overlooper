import React from 'react';
import PropTypes from 'prop-types';

import { graphql, gql } from 'react-apollo';
import { Link, withRouter } from 'react-router-dom';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Auth0Lock from 'auth0-lock';

import { setModal } from '../modal/modalActions';
import { createEvent } from '../event/eventActions';
import { setUser, login, logout } from '../user/userActions';

import CreateEventForm from '../create-event/CreateEventForm';
import { FlatOlButton, OlButton } from '../commonUI/OlButton';

import { APP_NAME } from '../constants';

import { Wrapper, HeaderRightFlatOlButton, HeaderLi, LogoHeaderLi, Logo } from './HeaderStyles';

const clientId = '60b37FXB05nFbvF4TVweT4il3scaA1Y3';
const domain = 'kelset.eu.auth0.com';

class Header extends React.PureComponent {
  constructor(props) {
    super(props);

    this._lock = new Auth0Lock(clientId, domain);
  }

  componentDidMount() {
    this._lock.on('authenticated', (authResult) => {
      this.props.login({ auth0IdToken: authResult.idToken });
      window.localStorage.setItem('auth0IdToken', authResult.idToken);
      // location.reload();
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data.loading && nextProps.data.user) {
      // this way I'll propagate the login to the store
      this.props.setUser({ user: nextProps.data.user });
    }
  }

  openEventModal() {
    this.props.setModal({
      children: (
        <CreateEventForm createEvent={this.props.createEvent} currentUser={this.props.user} />
      )
    });
  }

  _logout() {
    this.props.logout();
    window.localStorage.removeItem('auth0IdToken');
    // location.reload();
  }

  render() {
    const { user } = this.props;

    return (
      <Wrapper className="container">
        <HeaderLi>
          {user.auth0IdToken
            ? <FlatOlButton onClick={() => this.openEventModal()}>Create Event</FlatOlButton>
            : <div />}
        </HeaderLi>
        <LogoHeaderLi>
          <Link to="/"><Logo>{APP_NAME}</Logo></Link>
        </LogoHeaderLi>
        <HeaderLi>
          {user.auth0IdToken
            ? <div>
              <HeaderRightFlatOlButton
                onClick={() => {
                  this._logout();
                }}
              >
                  Logout
                </HeaderRightFlatOlButton>
              <OlButton>{user.name}</OlButton>
            </div>
            : <div>
              <HeaderRightFlatOlButton
                onClick={() => {
                  this._lock.show();
                }}
              >
                  Login/SignUp
                </HeaderRightFlatOlButton>
            </div>}
        </HeaderLi>
      </Wrapper>
    );
  }
}

Header.propTypes = {
  user: PropTypes.object,
  data: PropTypes.object.isRequired,
  // location: PropTypes.object.isRequired,
  setModal: PropTypes.func.isRequired,
  createEvent: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setModal,
      createEvent,
      setUser,
      login,
      logout
    },
    dispatch
  );

const userQuery = gql`
  query userQuery {
    user {
      id,
      name,
      eventsOwned {
        id,
        title
      }
    }
  }
`;

export default graphql(userQuery, { options: { fetchPolicy: 'network-only' } })(
  connect(mapStateToProps, mapDispatchToProps)(withRouter(Header))
);

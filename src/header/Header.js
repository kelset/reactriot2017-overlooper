import React from 'react';
import PropTypes from 'prop-types';

import { graphql, gql } from 'react-apollo';
import { Link, withRouter } from 'react-router-dom';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Auth0Lock from 'auth0-lock';

import { setModal, closeModal } from '../modal/modalActions';
import { createEvent } from '../event/eventActions';
import { setUser, login, logout } from '../user/userActions';

import CreateEventForm from '../create-event/CreateEventForm';
import CreateUserForm from '../create-user/CreateUserForm';
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
    // This code is commented because I couldn't figure out a way to make it work
    // redirect if user is logged in or did not finish Auth0 Lock dialog
    // if (this.props.data.user || window.localStorage.getItem('auth0IdToken') !== null) {
    //   console.warn('already logged in');
    //   this.props.setUser({ user: this.props.data.user });
    //   this.props.history.replace('/');
    // }

    this._lock.on('authenticated', (authResult) => {
      this.props.login({ auth0IdToken: authResult.idToken });
      window.localStorage.setItem('auth0IdToken', authResult.idToken);
      // Need to check user existence

      this.props.data.refetch().then((result) => {
        if (result.data.user) {
          this.props.setUser({ user: result.data.user });
          this.props.history.replace('/');
        } else {
          // now I need to create the actual user
          this.openCreateUserModal();
        }
      });
    });
  }

  createActualUser({ name, avatar }) {
    const variables = {
      idToken: window.localStorage.getItem('auth0IdToken'),
      avatar,
      name
    };

    this.props
      .createUser({ variables })
      .then(() => {
        this.props.closeModal();
        this.props.setUser({ user: variables });
        this.props.history.replace('/');
      })
      .catch((e) => {
        console.error(e);
        this.props.history.replace('/');
      });
  }

  openCreateEventModal() {
    this.props.setModal({
      children: (
        <CreateEventForm createEvent={this.props.createEvent} currentUser={this.props.user} />
      )
    });
  }

  openCreateUserModal() {
    this.props.setModal({
      children: <CreateUserForm createUser={this.createActualUser.bind(this)} />
    });
  }

  _logout() {
    this.props.logout();
    window.localStorage.removeItem('auth0IdToken');
    this.props.history.replace('/');
  }

  render() {
    const { user } = this.props;

    return (
      <Wrapper className="container">
        <HeaderLi>
          {user.auth0IdToken
            ? <FlatOlButton onClick={() => this.openCreateEventModal()}>Create Event</FlatOlButton>
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
  history: PropTypes.object.isRequired,
  createUser: PropTypes.func.isRequired,
  userQuery: PropTypes.func,
  setModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
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
      closeModal,
      createEvent,
      setUser,
      login,
      logout
    },
    dispatch
  );

const createUser = gql`
  mutation ($idToken: String!, $name: String!, $avatar: String!){
    createUser(authProvider: {auth0: {idToken: $idToken}}, name: $name, avatar: $avatar) {
      id
    }
  }
`;

const userQuery = gql`
  query userQuery {
    user {
      id,
      name,
      eventsOwned {
        id,
        title
      },
      attendingEvents {
        id,
        title
      },
    }
  }
`;

export default graphql(createUser, { name: 'createUser' })(
  graphql(userQuery, { options: { fetchPolicy: 'network-only' } })(
    connect(mapStateToProps, mapDispatchToProps)(withRouter(Header))
  )
);

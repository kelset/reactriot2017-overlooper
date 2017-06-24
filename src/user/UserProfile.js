import React from 'react';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';

import { Title, Wrapper } from './UserStyles';

const UserProfile = ({ user }) =>
  (<div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{user.name} - Profile</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <Wrapper>
      <Title>{user.name}</Title>
    </Wrapper>
  </div>);

UserProfile.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserProfile;

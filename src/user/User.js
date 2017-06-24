import React from 'react';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';
import { gql, graphql } from 'react-apollo';

import { Title, Wrapper } from './UserStyles';

const User = ({ data: { allUsers, refetch } }) =>
  (<div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>User</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <Wrapper>
      <Title>User</Title>
      <p>There are currently {allUsers && allUsers.length} users in the backend</p>
      <button onClick={() => refetch()}>
        Refresh
      </button>
    </Wrapper>
  </div>);

User.propTypes = {
  data: PropTypes.object.isRequired
};

export default graphql(gql`
  query AllUsersQuery {
    allUsers {
      id,
      name,
    }
  }
`)(User);

import React from 'react';
import { Helmet } from 'react-helmet';

import { Title, Wrapper } from './UserStyles';

const User = () =>
  (<div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>User</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <Wrapper>
      <Title>User</Title>
    </Wrapper>
  </div>);

export default User;

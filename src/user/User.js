import React from 'react';
import { Helmet } from 'react-helmet';

const User = () =>
  (<div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>User</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <h2>User</h2>
  </div>);

export default User;

import React from 'react';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';

import { Title, Wrapper } from './EventStyles';

const EventProfile = ({ event }) =>
  (<div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{event.title}</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <Wrapper>
      <Title>{event.title}</Title>
    </Wrapper>
  </div>);

EventProfile.propTypes = {
  event: PropTypes.object.isRequired
};

export default EventProfile;

import React from 'react';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';
import { gql, graphql } from 'react-apollo';

const Event = ({ data: { allEvents, refetch } }) =>
  (<div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Event</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <h2>Event</h2>
    <p>There are currently {allEvents && allEvents.length} events in the backend</p>
    <button onClick={() => refetch()}>
      Refresh
    </button>
  </div>);

Event.propTypes = {
  data: PropTypes.object.isRequired
};

export default graphql(gql`
  query AllEventsQuery {
    allEvents {
      id,
      title,
      startDate,
      endDate
    }
  }
`)(Event);

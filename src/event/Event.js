import React from 'react';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';
import { gql, graphql } from 'react-apollo';
import styled from 'styled-components';

import Header from '../app/Header';
import EventHero from './EventHero';

const CardListContainer = styled.div`

`;

const SectionTitle = styled.h2`
  font-family: Lato;
  font-weight: bold;
  text-align: center;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const Event = ({ data: { allEvents, refetch } }) =>
  (<div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Event</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <Header />
    <EventHero />
    <p>There are currently {allEvents && allEvents.length} events in the backend</p>
    <button onClick={() => refetch()}>
      Refresh
    </button>
    <CardListContainer className="container">
      <SectionTitle>Explore</SectionTitle>
    </CardListContainer>
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

import React from 'react';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';
import { gql, graphql } from 'react-apollo';
import styled from 'styled-components';

import Header from '../app/Header';
import EventHero from './EventHero';
import EventList from './EventList';

const CardListContainer = styled.div`

`;

const SectionTitle = styled.h2`
  font-family: Lato;
  font-weight: bold;
  text-align: center;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const dummyEvents = [
  {
    name: 'React Riot',
    desc: `React Riot is an online hackathon.
Teams of up to 4 people compete over a
48 hour period to build the best app they can,
using React JS.`,
  },
  {
    name: 'React Riot',
    desc: `React Riot is an online hackathon.
Teams of up to 4 people compete over a
48 hour period to build the best app they can,
using React JS.`,
  },
  {
    name: 'React Riot',
    desc: `React Riot is an online hackathon.
Teams of up to 4 people compete over a
48 hour period to build the best app they can,
using React JS.`,
  },
  {
    name: 'React Riot',
    desc: `React Riot is an online hackathon.
Teams of up to 4 people compete over a
48 hour period to build the best app they can,
using React JS.`,
  },
  {
    name: 'React Riot',
    desc: `React Riot is an online hackathon.
Teams of up to 4 people compete over a
48 hour period to build the best app they can,
using React JS.`,
  },
];

const Event = ({ data: { allEvents, refetch } }) =>
  (<div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Event</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <Header />
    <EventHero />
    <CardListContainer className="container">
      <SectionTitle>Explore</SectionTitle>
      <EventList events={dummyEvents} />
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

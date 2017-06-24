import React from 'react';
import { Helmet } from 'react-helmet';
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


const Event = () =>
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
    </CardListContainer>
  </div>);

export default Event;

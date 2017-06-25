import React from 'react';
import styled from 'styled-components';
import HeroBg from './hero-bg.jpg';

const Wrapper = styled.div`
  background-image: url(${HeroBg});
  min-height: 470px;
  background-size: cover;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h3`
  font-family: Lato;
  font-weight: bold;
  color: #fff;
  font-size: 48px;
`;

const EventHero = () =>
  (<Wrapper>
    <Title>Find a teammate</Title>
  </Wrapper>);

export default EventHero;

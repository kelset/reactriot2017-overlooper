import React from 'react';
import styled from 'styled-components';
import HeroBg from './hero-bg.jpg';
import { OlButton } from '../commonUI/OlButton';

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

const ButtonContainer = styled.div`
  width: 220px;
  align-self: center;
  margin-top: 15px;
`;

const OlButtonFullWidth = OlButton.extend`
  width: 100%;
`;

const EventHero = () =>
  (<Wrapper>
    <Title>Find a teammate</Title>
    <ButtonContainer>
      <OlButtonFullWidth>
        Sign Up
      </OlButtonFullWidth>
    </ButtonContainer>
  </Wrapper>);

export default EventHero;

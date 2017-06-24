import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { OlButton } from '../commonui/OlButton';

const Wrapper = styled.div`
  width: 23%;
  margin: 0 1%;
  border: 1px solid #c1c1c1;
  margin-top: 40px;
`;

const CardImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const CardBodyWrapper = styled.div`
  padding: 20px 20px;
`;

const Title = styled.h4`
  font-family: Lato;
  font-weight: 600;
  font-size: 18px;
`;

const Description = styled.p`
  font-family: Lato;
  font-size: 13px;
  color: #626262;
`;

const SeekingPeopleContainer = styled.div`
  margin-left: -5px;
`;

const SeekingPeopleImg = styled.img`
  border-radius: 100%;
  width: 20px;
  height: 20px;
  object-fit: cover;
  margin-left: 3px;
`;

const SeekingPeopleText = styled.span`
  margin-left: 5px;
  font-size: 13px;
`;

const ActionContainer = styled.div`
  margin-top: 20px;
  width: 100%;
`;

const FullWidthOlButton = OlButton.extend`
  width: 100%;
`;

const EventCard = ({ event }) =>
  (<Wrapper>
    <CardImage src="http://placehold.it/900" alt={event.name} />
    <CardBodyWrapper>
      <Title>{ event.name }</Title>
      <Description>{ event.desc }</Description>
      <SeekingPeopleContainer>
        <SeekingPeopleImg src="http://placehold.it/300" alt="user-name" />
        <SeekingPeopleImg src="http://placehold.it/300" alt="user-name" />
        <SeekingPeopleImg src="http://placehold.it/300" alt="user-name" />
        <SeekingPeopleText>and 5 more</SeekingPeopleText>
      </SeekingPeopleContainer>
      <ActionContainer>
        <FullWidthOlButton>Participate Now</FullWidthOlButton>
      </ActionContainer>
    </CardBodyWrapper>
  </Wrapper>);

EventCard.propTypes = {
  event: PropTypes.object.isRequired
};

export default EventCard;

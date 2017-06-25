import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { setEvent } from './eventActions';

import { FlatOlButton } from '../commonUI/OlButton';
import {
  Wrapper,
  CardImage,
  CardBodyWrapper,
  Title,
  Description,
  SeekingPeopleContainer,
  SeekingPeopleImg,
  SeekingPeopleText,
  ActionContainer,
  FullWidthOlButton
} from './EventStyles';

class EventCard extends React.PureComponent {
  navigateToEvent(event) {
    this.props.setEvent(event);
    this.props.history.push({ pathname: '/event' });
  }

  render() {
    const { event } = this.props;
    return (
      <Wrapper>
        <CardImage src={event.image} alt={event.title} />
        <CardBodyWrapper>
          <FlatOlButton onClick={() => this.navigateToEvent(event)}>
            <Title>{event.title}</Title>
          </FlatOlButton>
          <Description>{event.description}</Description>
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
      </Wrapper>
    );
  }
}

EventCard.propTypes = {
  event: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  setEvent: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setEvent
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EventCard));

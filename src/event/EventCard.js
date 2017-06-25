import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { setEvent } from './eventActions';

import { FlatOlButton } from '../commonUI/OlButton';
import {
  CardWrapper,
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
    this.props.history.push({ pathname: `/event/${event.id}` });
  }

  render() {
    const { event, user } = this.props;
    console.log(event);
    return (
      <CardWrapper>
        <CardImage
          onClick={() => this.navigateToEvent(event)}
          src={event.image}
          alt={event.title}
        />
        <CardBodyWrapper>
          <FlatOlButton onClick={() => this.navigateToEvent(event)}>
            <Title>{event.title}</Title>
          </FlatOlButton>
          <Description>{event.description}</Description>
          <SeekingPeopleContainer>
            { event.participants.length >= 3
              ? [...Array(3)]
                .map((e, i) => (<SeekingPeopleImg
                  src={event.participants[i].avatar}
                  alt="user-name"
                />))
                  : null }
            { event.participants.length > 3
            ? <SeekingPeopleText> { event.participants.length - 3} more</SeekingPeopleText>
            : null }

            { event.participants.length < 3 && event.participants.length > 0
            ? <SeekingPeopleText> { event.participants.length } people</SeekingPeopleText>
            : null }
          </SeekingPeopleContainer>
          {user.auth0IdToken
            ? <ActionContainer>
              <FullWidthOlButton>Participate Now</FullWidthOlButton>
            </ActionContainer>
            : null}
        </CardBodyWrapper>
      </CardWrapper>
    );
  }
}

EventCard.propTypes = {
  event: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  setEvent: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setEvent
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EventCard));

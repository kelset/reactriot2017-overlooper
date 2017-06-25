import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import {
  SingleEventTitle,
  SingleEventDescription,
  SingleEventWrapper,
  SingleEventImage,
  SingleEventBodyWrapper,
} from './EventStyles';

import { OlButton } from '../commonUI/OlButton';
import EventUserList from './EventUserList';

const dummyEvent = {
  title: 'React Riot',
  description: `React Riot is an online hackathon.
Teams of up to 4 people compete over a
48 hour period to build the best app they can,
using React JS.`,
  image: 'http://placehold.it/400',
  users: [
    {
      image: 'http://placehold.it/300',
      name: '@erdogmusergun',
    },
    {
      image: 'http://placehold.it/400',
      name: '@kelset',
    },
    {
      image: 'http://placehold.it/300',
      name: '@ergun1017',
    }
  ]
};

class EventProfile extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      currentUserParticipated: true,
    };
  }

  render() {
    const { editMode } = this.state;
    const { event } = this.props;
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{event.title}</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <SingleEventWrapper>
          <SingleEventImage src={event.image} alt={event.title} />
          <SingleEventBodyWrapper>
            <SingleEventTitle>{event.title}</SingleEventTitle>
            <SingleEventDescription>{event.description}</SingleEventDescription>
            { !this.state.currentUserParticipated ?
              <OlButton>Participate Now</OlButton> :
              <EventUserList users={event.users} /> }
          </SingleEventBodyWrapper>
        </SingleEventWrapper>
      </div>
    );
  }
}

EventProfile.propTypes = {
  event: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  event: state.event.title ? state.event : dummyEvent,
});

export default connect(mapStateToProps)(EventProfile);

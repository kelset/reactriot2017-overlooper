import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { withApollo, gql } from 'react-apollo';

import {
  SingleEventTitle,
  SingleEventDescription,
  SingleEventWrapper,
  SingleEventImage,
  SingleEventBodyWrapper,
} from './EventStyles';

import { OlButton } from '../commonUI/OlButton';
import EventUserList from './EventUserList';

class EventProfile extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      currentUserParticipated: true,
      hasEvent: props.hasEvent,
      event: props.event,
      data: {},
    };
  }

  componentDidMount() {
    const eventId = this.props.match.params.id;
    if (!this.props.hasEvent) {
      this.props.client.query({
        query: gql`
        query AllEventsQuery {
            Event(id: "${eventId}") {
              id,
              title,
              startDate,
              endDate,
              image,
              description,
              owner {
                id,
                name
              },
              participants {
                id,
                name
              }
            }
          }
      `,
      })
      .then((resp) => {
        console.log('got response', resp);
        this.setState({ event: resp.data.Event, hasEvent: true });
      })
      .catch(err => console.error(err));
    }
  }

  render() {
    const { editMode, event } = this.state;

    if (!this.state.hasEvent) {
      return (
        <SingleEventWrapper>
          <div> Loading... </div>
        </SingleEventWrapper>
      );
    }

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
              <EventUserList users={event.participants} /> }
          </SingleEventBodyWrapper>
        </SingleEventWrapper>
      </div>
    );
  }
}

EventProfile.propTypes = {
  event: PropTypes.object.isRequired,
  hasEvent: PropTypes.bool.isRequired,
  client: PropTypes.object.isRequired,
  match: PropTypes.object,
};

const mapStateToProps = state => ({
  event: state.event,
  hasEvent: Boolean(state.event.title),
});

export default connect(mapStateToProps)(withApollo(EventProfile));

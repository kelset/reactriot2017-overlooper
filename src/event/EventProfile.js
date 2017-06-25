import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { Title, Wrapper } from './EventStyles';

class EventProfile extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false
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
        <Wrapper>
          <Title>{event.title}</Title>
          {editMode
            ? <p>You can see this line only if you are the owner</p>
            : <p>This event is owned by {event.owner}</p>}
        </Wrapper>
      </div>
    );
  }
}

EventProfile.propTypes = {
  event: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  event: state.event
});

export default connect(mapStateToProps)(EventProfile);

import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { Title } from './EventStyles';

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
        <div>
          <Title>{event.title}</Title>
        </div>
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

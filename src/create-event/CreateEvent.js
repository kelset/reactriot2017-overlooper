import React from 'react';
import { connect } from 'react-redux';
import CreateEventInfoForm from './CreateEventInfoForm';

const CreateEvent = () =>
  (<div className="container">
    <CreateEventInfoForm />
  </div>);

const mapStateToProps = state => state.createEvent;

export default connect(mapStateToProps)(CreateEvent);

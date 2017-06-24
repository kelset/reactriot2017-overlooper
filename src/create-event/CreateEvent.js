import React from 'react';
import { connect } from 'react-redux';
import CreateEventInfoForm from './CreateEventInfoForm';

const mapStateToProps = state => state.createEvent;
const CreateEvent = () =>
  (<div className="container">
    <CreateEventInfoForm />
  </div>);

export default connect(mapStateToProps, () => {})(CreateEvent);

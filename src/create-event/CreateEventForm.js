import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  DivWithoutPadding,
  EventImage,
  FormWrapper,
  Title,
  InputTitle,
  InputDesc,
  ActionWrapper
} from './CreateEventStyles';
import { OlButtonFullWidth } from '../commonUI/OlButton';

class CreateEventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      desc: '',
      img: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(key) {
    return (event) => {
      this.setState({ [key]: event.target.value });
    };
  }
  handleClick() {
    this.props.createEvent({
      owner: this.props.currentUser,
      title: this.state.title,
      description: this.state.desc,
      image: 'http://placehold.it/300',
    });
  }
  render() {
    return (<Wrapper>
      <Title>Fill the Event Information</Title>
      <FormWrapper>
        <DivWithoutPadding className="col-md-3">
          <EventImage src="http://placehold.it/300" alt="eventImage" />
        </DivWithoutPadding>
        <div className="col-md-9">
          <InputTitle onChange={this.handleChange('title')} value={this.state.title} type="text" placeholder="Title of the event" />
          <InputDesc onChange={this.handleChange('desc')} value={this.state.desc} type="text" placeholder="Description of the event" />
          <ActionWrapper>
            <OlButtonFullWidth
              onClick={this.handleClick}
            >
              Next
            </OlButtonFullWidth>
          </ActionWrapper>
        </div>
      </FormWrapper>
    </Wrapper>);
  }
}

CreateEventForm.propTypes = {
  createEvent: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired
};

export default CreateEventForm;

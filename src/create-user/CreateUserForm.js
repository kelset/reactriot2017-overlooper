import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  DivWithoutPadding,
  EventImage,
  FormWrapper,
  Title,
  InputTitle,
  ActionWrapper
} from './CreateUserStyles';
import { OlButtonFullWidth } from '../commonUI/OlButton';

class CreateUserForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      avatar: 'http://placehold.it/300'
    };
  }

  handleChange(key) {
    return (event) => {
      this.setState({ [key]: event.target.value });
    };
  }

  render() {
    const { createUser } = this.props;
    const { avatar, name } = this.state;

    return (
      <Wrapper>
        <Title>Complete your Profile</Title>
        <FormWrapper>
          <DivWithoutPadding className="col-md-3">
            <EventImage src={avatar} alt="eventImage" />
          </DivWithoutPadding>
          <div className="col-md-9">
            <InputTitle
              onChange={this.handleChange('name')}
              value={name}
              type="text"
              placeholder="Your name"
            />
            <ActionWrapper>
              <OlButtonFullWidth
                onClick={() =>
                  createUser({
                    name,
                    avatar
                  })}
              >
                Next
              </OlButtonFullWidth>
            </ActionWrapper>
          </div>
        </FormWrapper>
      </Wrapper>
    );
  }
}
// const CreateUserForm = ({ createUser }) =>

CreateUserForm.propTypes = {
  createUser: PropTypes.func.isRequired
  // currentUser: PropTypes.object.isRequired
};

export default CreateUserForm;

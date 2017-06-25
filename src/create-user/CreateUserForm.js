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

const CreateUserForm = ({ createUser }) =>
  (<Wrapper>
    <Title>Complete your Profile</Title>
    <FormWrapper>
      <DivWithoutPadding className="col-md-3">
        <EventImage src="http://placehold.it/300" alt="eventImage" />
      </DivWithoutPadding>
      <div className="col-md-9">
        <InputTitle type="text" placeholder="Your name" />
        <ActionWrapper>
          <OlButtonFullWidth
            onClick={() =>
              createUser({
                name: 'test',
                avatar: 'http://placehold.it/300'
              })}
          >
            Next
          </OlButtonFullWidth>
        </ActionWrapper>
      </div>
    </FormWrapper>
  </Wrapper>);

CreateUserForm.propTypes = {
  createUser: PropTypes.func.isRequired
  // currentUser: PropTypes.object.isRequired
};

export default CreateUserForm;

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

const CreateEventForm = ({ createEvent, currentUser }) =>
  (<Wrapper>
    <Title>Fill the Event Information</Title>
    <FormWrapper>
      <DivWithoutPadding className="col-md-3">
        <EventImage src="http://placehold.it/300" alt="eventImage" />
      </DivWithoutPadding>
      <div className="col-md-9">
        <InputTitle type="text" placeholder="Title of the event" />
        <InputDesc placeholder="Description of the event" />
        <ActionWrapper>
          <OlButtonFullWidth
            onClick={() =>
              createEvent({
                owner: currentUser,
                title: 'test',
                description: 'test',
                image: 'http://placehold.it/300'
              })}
          >
            Next
          </OlButtonFullWidth>
        </ActionWrapper>
      </div>
    </FormWrapper>
  </Wrapper>);

CreateEventForm.propTypes = {
  createEvent: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired
};

export default CreateEventForm;

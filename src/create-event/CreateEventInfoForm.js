import React from 'react';
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

const CreateEventInfoForm = () =>
  (<Wrapper>
    <Title>1/3 Fill the Event Information</Title>
    <FormWrapper>
      <DivWithoutPadding className="col-md-3">
        <EventImage src="http://placehold.it/300" alt="eventImage" />
      </DivWithoutPadding>
      <div className="col-md-9">
        <InputTitle type="text" placeholder="Title of the event" />
        <InputDesc placeholder="Description of the event" />
        <ActionWrapper>
          <OlButtonFullWidth>Next</OlButtonFullWidth>
        </ActionWrapper>
      </div>
    </FormWrapper>
  </Wrapper>);

export default CreateEventInfoForm;

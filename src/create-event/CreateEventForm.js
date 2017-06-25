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
  ActionWrapper,
  AddQuestionWrapper,
  AddQuestionButton,
} from './CreateEventStyles';
import AddQuestionComponent from './AddQuestionComponent';
import { OlButtonFullWidth } from '../commonUI/OlButton';

class CreateEventForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      desc: '',
      img: 'http://placehold.it/300',
      numberOfQuestions: 1,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleAddQuestionClick = this.handleAddQuestionClick.bind(this);
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
      image: this.state.img
    });
  }

  handleAddQuestionClick() {
    this.setState({ numberOfQuestions: this.state.numberOfQuestions + 1 });
    console.log(this.state.numberOfQuestions);
  }

  render() {
    const { desc, img, title } = this.state;

    return (
      <Wrapper>
        <Title>Fill the Event Information</Title>
        <FormWrapper>
          <DivWithoutPadding className="col-md-3">
            <EventImage src={img} alt="eventImage" />
            <InputTitle
              onChange={this.handleChange('img')}
              value={img}
              type="text"
              placeholder="Url of the image for the event"
            />
          </DivWithoutPadding>
          <div className="col-md-9">
            <InputTitle
              onChange={this.handleChange('title')}
              value={title}
              type="text"
              placeholder="Title of the event"
            />
            <InputDesc
              onChange={this.handleChange('desc')}
              value={desc}
              type="text"
              placeholder="Description of the event"
            />
            {[...Array(this.state.numberOfQuestions)]
              .map((e, i) => (<AddQuestionComponent
                addQuestion={this.props.addQuestion}
                questionNumber={i + 1}
              />))}
            <ActionWrapper>
              <OlButtonFullWidth onClick={this.handleClick}>
                Create
              </OlButtonFullWidth>
            </ActionWrapper>
            <AddQuestionWrapper>
              <AddQuestionButton onClick={this.handleAddQuestionClick}>
                Add Question
              </AddQuestionButton>
            </AddQuestionWrapper>
          </div>
        </FormWrapper>
      </Wrapper>
    );
  }
}

CreateEventForm.propTypes = {
  createEvent: PropTypes.func.isRequired,
  addQuestion: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired
};

export default CreateEventForm;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { QuestionTypes } from '../constants';

import { Title, Description } from './EventStyles';

import { OlButton } from '../commonUI/OlButton';

const Wrapper = styled.div`
  width: 400px;
  min-height: 300px;
`;

const TextInput = styled.textarea`
  width: 100%;
  height: 70px;
  border: 1px solid #f0f0f0;
  font-size: 13px;
  margin-top: 10px;
  padding: 10px 10px;
  resize: none;
`;

const QuestionWrapper = styled.div`
  margin-top: 5px;
`;

const QuestionLabel = styled.label`
  margin-left: 5px;
`;

const AnswerButton = OlButton.extend`
  margin-top: 20px;
`;

class ParticipateModal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      answers: []
    };

    this.handleAnswer = this.handleAnswer.bind(this);
  }

  handleAnswer(index) {
    return (e) => {
      const dummyAnswers = this.state.answers;
      dummyAnswers[index] = e.target.value;
      this.setState({ answers: dummyAnswers });
    };
  }

  render() {
    const { event } = this.props;
    return (
      <Wrapper>
        <Title>{ event.title }</Title>
        <Description> { event.description }</Description>
        { event.questionsToAsk.map((question, i) => (
          <div>
            <div style={{ marginTop: '10px' }}> { question.phrase } </div>
            { question.questionType === QuestionTypes.OPEN_ANSWER
            ? <TextInput onChange={this.handleAnswer(i)} />
            : <QuestionWrapper>
              <input type="radio" id={`${question.id}-yes`} name={question.id} value="Yes" />
              <QuestionLabel htmlFor={`${question.id}-yes`}>Yes</QuestionLabel>
              <input style={{ marginLeft: '10px' }} type="radio" id={`${question.id}-no`}name={question.id} value="No" />
              <QuestionLabel htmlFor={`${question.id}-no`}>No</QuestionLabel>
            </QuestionWrapper>
            }
          </div>
        )) }
        <AnswerButton>Answer and Participate</AnswerButton>
      </Wrapper>
    );
  }
}

ParticipateModal.propTypes = {
  event: PropTypes.object.isRequired,
};

export default ParticipateModal;

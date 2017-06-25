import React from 'react';
import PropTypes from 'prop-types';
import { SmallTitle, InputTitle } from './CreateEventStyles';
import { QuestionTypes } from '../constants';


class AddQuestionComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      phrase: '',
      questionType: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(key) {
    this.props.addQuestion(this.state, this.props.questionNumber - 1);
    return event => this.setState({ [key]: event.target.value });
  }

  render() {
    return (
      <div>
        <SmallTitle>
          { this.props.questionNumber }. Question
        </SmallTitle>
        <InputTitle type="text" onChange={this.handleChange('phrase')} value={this.state.phrase} placeholder="Question" />
        { Object.keys(QuestionTypes)
          .map(key => (
            <div key={key}>
              <input
                type="radio"
                onChange={this.handleChange('questionType')}
                value={QuestionTypes[key]}
                id={key}
                name={`question-type-${this.props.questionNumber}`}
              />
              <label style={{ marginTop: '5px', marginLeft: '5px' }} htmlFor={key}>{ QuestionTypes[key] }</label>
            </div>
          )) }
      </div>
    );
  }
}

AddQuestionComponent.propTypes = {
  questionNumber: PropTypes.number.isRequired,
  addQuestion: PropTypes.func.isRequired,
};

export default AddQuestionComponent;

import ActionTypes from '../constants';

const initialState = {
  owner: null,
  title: '',
  questions: [],
  participants: [],
  description: '',
  image: 'http://placehold.it/900'
};

const event = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FILL_EVENT_INFORMATION:
      return {
        ...state,
        owner: action.owner,
        title: action.title,
        description: action.description,
        image: action.image
      };
    case ActionTypes.SET_EVENT:
      return {
        ...state,
        ...action.event
      };
    case ActionTypes.ADD_QUESTION:
      return {
        ...state,
        questions: [
          ...state.event.questions,
          {
            phrase: action.phrase,
            detail: action.detail,
            questionType: action.questionType,
            answerOptions: action.answerOptions
          }
        ]
      };
    default:
      return state;
  }
};

export default event;

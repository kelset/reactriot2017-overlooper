import ActionTypes from '../constants';

const initialState = {
  owner: null,
  title: '',
  questionsToAsk: [],
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
    case ActionTypes.ADD_QUESTION: {
      const dummyQuestions = state.questionsToAsk;
      dummyQuestions[action.index] = { phrase: action.phrase, questionType: action.questionType };
      return {
        ...state,
        questionsToAsk: dummyQuestions
      };
    }
    default:
      return state;
  }
};

export default event;

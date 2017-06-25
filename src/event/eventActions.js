import ActionTypes from '../constants';

export const setEvent = event => ({
  type: ActionTypes.SET_EVENT,
  event
});

export const addQuestion = (phrase, detail, questionType, answerOptions) => ({
  type: ActionTypes.ADD_QUESTION,
  phrase,
  detail,
  questionType,
  answerOptions
});

export const newEvent = (owner, title, description, image) => ({
  type: ActionTypes.FILL_EVENT_INFORMATION,
  owner,
  title,
  description,
  image
});

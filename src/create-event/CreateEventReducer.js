const eventInformation = (state = {}, action) => {
  switch (action.type) {
    case 'FILL_EVENT_INFORMATION':
      return {
        title: action.title,
        desc: action.desc,
        imgURL: action.imgURL,
      };
    case 'ADD_QUESTION':
      return {
        ...state,
        questions: [...questions, {
          phrase: action.phrase,
          type: action.questionType,
          options: action.options,
        }],
      };
    default:
      return state;
  }
};

export default eventInformation;

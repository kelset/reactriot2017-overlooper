const createEvent = (state = {}, action) => {
  switch (action.type) {
    case 'FILL_EVENT_INFORMATION':
      return {
        ...state,
        createEvent: {
          title: action.title,
          desc: action.desc,
          imgURL: action.imgURL,
        }
      };
    case 'ADD_QUESTION':
      return {
        ...state,
        createEvent: {
          ...state.createEvent,
          questions: [...state.createEvent.questions, {
            phrase: action.phrase,
            type: action.questionType,
            options: action.options,
          }]
        },
      };
    default:
      return state;
  }
};

export default createEvent;

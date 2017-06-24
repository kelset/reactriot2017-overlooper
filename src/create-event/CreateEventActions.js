export const fillEventInformation = title => desc => ({
  type: 'FILL_EVENT_INFORMATION',
  title,
  desc,
  imgURL,
});

export const createQuestion = phrase => questionType => options => ({
  type: 'ADD_QUESTION',
  phrase,
  questionType,
  options,
});

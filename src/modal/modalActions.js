import ActionTypes from '../constants';

export const setModal = ({ children }) => ({
  type: ActionTypes.SET_MODAL,
  children
});

export const closeModal = () => ({
  type: ActionTypes.CLOSE_MODAL
});

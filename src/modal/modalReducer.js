import ActionTypes from '../constants';

const initialState = {
  isOpen: false,
  children: null,
  title: ''
};

const modal = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_MODAL:
      return {
        isOpen: true,
        children: action.children
      };
    case ActionTypes.CLOSE_MODAL:
      return {
        ...state,
        isOpen: false
      };
    default:
      return state;
  }
};

export default modal;

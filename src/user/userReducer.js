import ActionTypes from '../constants';

const initialState = {
  id: '',
  name: '',
  eventsOwned: [],
  auth0IdToken: null
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_USER:
      return {
        ...state,
        ...action
      };
    case ActionTypes.LOGIN:
      return {
        auth0IdToken: action.auth0IdToken
      };
    case ActionTypes.LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default user;

import ActionTypes from '../constants';

export const setUser = ({ user }) => ({
  type: ActionTypes.SET_USER,
  ...user
});

export const login = ({ auth0IdToken }) => ({
  type: ActionTypes.LOGIN,
  auth0IdToken
});

export const logout = () => ({
  type: ActionTypes.LOGOUT
});

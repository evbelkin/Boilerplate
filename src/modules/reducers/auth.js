/* @flow */

export const LOGIN_REQUESTED: string = 'LOGIN_REQUESTED';
export const LOGIN: string = 'LOGIN';
export const LOGOUT_REQUESTED: string = 'LOGOUT_REQUESTED';
export const LOGOUT: string = 'LOGOUT';

type State = {
  loggedIn: boolean,
  fetching: boolean,
  username: string,
  message: { type?: string, text?: string }
};

const initialState = {
  loggedIn: false,
  fetching: false,
  username: 'guest',
  message: {}
}

export default (state: State = initialState, action: Object): State => {
  switch (action.type) {
    case LOGIN_REQUESTED:
      return {
        ...state,
        fetching: true
      }
  
    case LOGIN:
      return {
        ...state,
        loggedIn: action.loggedIn,
        fetching: !state.fetching,
        username: action.username,
        message: action.message
      }

    case LOGOUT_REQUESTED:
      return {
        ...state,
        fetching: true
      }
  
    case LOGOUT:
      return {
        ...state,
        loggedIn: action.loggedIn,
        fetching: !state.fetching,
        message: {}
      }

    default:
      return state
  }
}
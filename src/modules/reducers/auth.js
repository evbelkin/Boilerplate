export const LOGIN_REQUESTED = 'LOGIN_REQUESTED';
export const LOGIN = 'LOGIN';
export const LOGOUT_REQUESTED = 'LOGOUT_REQUESTED';
export const LOGOUT = 'LOGOUT';

const initialState = {
  loggedIn: false,
  fetching: false,
  message: {}
}

export default (state = initialState, action) => {
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
        fetching: !state.fetching
      }

    default:
      return state
  }
}
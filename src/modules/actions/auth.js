/* @flow */

export const LOGIN_REQUESTED: string = 'LOGIN_REQUESTED';
export const LOGIN: string = 'LOGIN';
export const LOGOUT_REQUESTED: string = 'LOGOUT_REQUESTED';
export const LOGOUT: string = 'LOGOUT';

const USERS: Array<{ id: number, username: string, password: string }> = [
  { id: 1, username: 'admin', password: 'admin' },
  { id: 2, username: 'user', password: 'user' }
];

type funcArgs = {
  username: string, 
  password: string
};

type Action = 
 | { type: "LOGIN_REQUESTED" }
 | { type: "LOGIN", username: string, loggedIn: boolean, message: { type?: string, text?: string } }
 | { type: "LOGOUT_REQUESTED" }
 | { type: "LOGOUT", loggedIn: boolean };

type GetState = () => State;
type PromiseAction = Promise<Action>;
type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
type Dispatch = (action: Action | ThunkAction | PromiseAction | Array<Action>) => any;

export const login = ({ username, password }:funcArgs): ThunkAction => {
  return (dispatch, getState) => {
    dispatch({
      type: LOGIN_REQUESTED
    });

    return setTimeout(() => {
      let auth = authUser({ username, password })
      dispatch({
        type: LOGIN,
        username: auth ? username : 'guest',
        loggedIn: auth,
        message: auth ?
          { type: 'success', text:'Вход успешен' } :
          { type: 'fail', text:'Неправильный логин или пароль' }
      })
    }, 2000);
  }
};

export const logout = (): ThunkAction => {
  return (dispatch, getState) => {
    dispatch({
      type: LOGOUT_REQUESTED
    });

    return setTimeout(() => {
      dispatch({
        type: LOGOUT,
        loggedIn: false
      })
    }, 2000);
  }
};

function authUser ({ username, password }:funcArgs): boolean {

  let auth = USERS.filter(item => {
    return item.username === username && item.password === password;
  });

  return auth.length ? true : false;
}
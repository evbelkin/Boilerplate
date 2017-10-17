/* @flow */

export const GET_NAVIGATION_REQUESTED: string = 'GET_NAVIGATION_REQUESTED';
export const GET_NAVIGATION: string = 'GET_NAVIGATION';

type State = {
  links: Array<{ id: number, title: string, value: string}>,
  fetching: boolean
};

const initialState = {
  links: [],
  fetching: false
}

export default (state: State = initialState, action: Object): State => {
  switch (action.type) {
    case GET_NAVIGATION_REQUESTED:
      return {
        ...state,
        fetching: true
      }
  
    case GET_NAVIGATION:
      return {
        ...state,
        links: action.links,
        fetching: !state.fetching
      }

    default:
      return state
  }
}
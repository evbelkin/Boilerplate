/* @flow */

export const GET_HOME_REQUESTED: string = 'GET_HOME_REQUESTED';
export const GET_HOME: string = 'GET_HOME';

type State = {
  jumbotron: { id?: number, title?: string, body?: string },
  news: Array<{ id: number, title: string, body: string }>,
  fetching: boolean
};

const initialState = {
  jumbotron: {},
  news: [],
  fetching: false
}

export default (state: State = initialState, action: Object): State => {
  switch (action.type) {
    case GET_HOME_REQUESTED:
      return {
        ...state,
        fetching: true
      }
  
    case GET_HOME:
      return {
        ...state,
        jumbotron: action.jumbotron,
        news: action.news,
        fetching: !state.fetching
      }

    default:
      return state
  }
}
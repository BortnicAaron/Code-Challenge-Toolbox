import { ADD_TEXT } from './action.jsx'

const initialState = {
  results: [],
  idText: 1
}

export default function reducer (state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TEXT:
      return {
        ...state,
        results: state.results.concat({ ...payload, idText: state.idText }),
        idText: state.idText + 1
      }
    default:
      return state
  }
}

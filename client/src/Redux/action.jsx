import axios from 'axios'

function errorH (err) {
  console.error(err)
}

const iecho = (text) => axios.get(`http://localhost:3000/iecho?text=${text}`).catch(errorH)

export const ADD_TEXT = 'ADD_TEXT'

export function addText (text) {
  return function (dispatch) {
    return iecho(text).then((data) => {
      if (data) {
        dispatch({ type: ADD_TEXT, payload: data })
      }
    })
  }
}

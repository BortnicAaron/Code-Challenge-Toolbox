import axios from 'axios'


function errorHandler (err) {
  console.error(err)
  // eslint-disable-next-line no-undef
  alert(`Error:
    Status: ${err.response.status}
    Message: ${err.response.data.error}`)
}

const iecho = (text) => axios.get(`http://localhost:3000/iecho?text=${text}`).catch(errorHandler)

export const ADD_TEXT = 'ADD_TEXT'

export function addText (text) {
  return function (dispatch) {
    return iecho(text).then(( data ) => {
      console.log(data)
      dispatch({ type: ADD_TEXT, payload: data })
    })
  }
}

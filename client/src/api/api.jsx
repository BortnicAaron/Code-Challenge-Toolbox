import axios from 'axios'

function errorHandler (err) {
  console.error(err)
  // eslint-disable-next-line no-undef
  alert(`Error:
    Status: ${err.response.status}
    Message: ${err.response.data.error}`)
}
console.log(get)
export const iecho = (text) => axios.get(`http://localhost:3000/iecho?text=${text}`).catch(errorHandler)
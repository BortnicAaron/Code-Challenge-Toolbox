const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
/**
 * get presentación
 */
app.get('/', (req, res) => {
  res.send({ message: '‎Bienvenido a la aplicación' })
})

/**
 * get texto invertido
 */
app.use('/iecho', require('./routes/texts'))

app.listen(3000, () => {
  console.log('Server on port', 3000)
})

module.exports = app

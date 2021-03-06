const { Router } = require('express')
const router = Router()

/**
 * get texto invertido
 */
router.get('/', (req, res) => {
  const { text } = req.query
  if (typeof text !== 'string' || text === '') return res.status(400).json({ error: 'no text' })
  let textReverse = ''
  for (let i = text.length - 1; i > -1; i--) {
    textReverse += text[i]
  }
  if (textReverse.replace(/ /g, '').toLocaleUpperCase() === text.replace(/ /g, '').toLocaleUpperCase()) {
    return res.status(200).json({ text: textReverse, palindrome: true })
  }

  return res.status(200).json({ text: textReverse })
})

module.exports = router

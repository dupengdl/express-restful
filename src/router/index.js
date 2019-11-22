const express = require('express')
const router = express.Router()

router.get('/cors', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.json({
    text: 'CORS test success'
  })
  next()
})

router.post('/mr-hooks', function(req, res, next) {
  console.log(req.body)
  res.json({
    text: 'post success'
  })
  next()
})

router.all('*', function(req, res) {
  res.send('404 Not Found')
})

module.exports = router

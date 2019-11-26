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

router.post('/mr-hooks', function(req, res) {
  // secret token: bfe5626e-0b45-c903-b3c5-753eb24494a3
  console.log('headers:', req.headers)
  console.log('body:', req.body)
  res.json({
    text: 'post success'
  })
})

router.all('*', function(req, res) {
  res.send('404 Not Found')
})

module.exports = router

const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000

app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api', require('./src'))

app.listen(port, function(err) {
  if (err) {
    console.log(err)
  }

  console.log('Listening at http://127.0.0.1:' + port)
})

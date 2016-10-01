'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 9090

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json({ message: 'Hello from NodeJS' })
})

app.listen(port)
console.info('TODO WEB-API is started at ', port)

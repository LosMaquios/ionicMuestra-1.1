'use strict'

const functions = require('firebase-functions')
const nodemailer = require('nodemailer')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const config = functions.config()

app.use(cors())
app.use(bodyParser.json())

app.post('/', ({ body }, response) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.email.user,
      pass: config.email.pass
    }
  })

  const mailOptions = {
    from: '"Pet" <raan.v98@gmail.com>',
    to: body.to,
    subject: body.subject,
    html: body.message
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) throw error
    console.log('Sending message', info)
    response.end('All working....')
  })
})

exports.sendMail = functions.https.onRequest(app)

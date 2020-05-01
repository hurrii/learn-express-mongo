require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

const mongooseOptions = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose.connect(process.env.DATABASE_URL, mongooseOptions)
const db = mongoose.connection
db.on('error', err => console.log(err))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)


app.listen(3000, () => console.log('Server started'))
const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const users = require('./routes/users')
const posts = require('./routes/posts')
const ipfs = require('./routes/ipfs')
const cors = require('cors')
const passport = require('passport')
const fileUpload = require('express-fileupload')

//setup environment
dotenv.config()

//mongodb connect

mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true })

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())

app.use(passport.initialize())
require('./config/passport')(passport)

app.use(fileUpload());
app.use('/api/users', users)
app.use('/api/posts', posts)
app.use('/api/ipfs', ipfs)

const PORT = process.env.PORT || 5000

app.listen( PORT, () => console.log(`Server is running on port ${PORT}`))
require ('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser')
const cors = require('cors')

const app = express();
app.use(cors({ origin: true }))
app.use(bodyParser.json())

const blogsRouter = require('./client/src/routes/blogs.js')
app.use('/blogs', blogsRouter)




mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(app.listen(5000, () => console.log(`Listening on port 5000`)))

const db = mongoose.connection
db.on('error', ()=> console.error(error))
db.once('open', () =>{console.log('Database open!')})

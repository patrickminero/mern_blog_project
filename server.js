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

const PORT = process.env.PORT || 5000;

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
}

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(app.listen(PORT, () => console.log(`Listening on port ${PORT}`)))

const db = mongoose.connection
db.on('error', (error)=> console.error(error))
db.once('open', () =>{console.log('Database open!')})

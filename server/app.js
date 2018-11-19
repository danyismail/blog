const express = require('express')
const app = express()
const Mongoose = require('mongoose')
const db = Mongoose.connection
const cors = require('cors')
const port = process.env.PORT || 1212
require('dotenv').config
Mongoose.connect('mongodb://localhost:27017/blog', {useNewUrlParser:true})
db.once('open', function(){
    console.log('Connect to mongoose')
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.listen(port, function(){
    console.log(`Hello express from port : ${port}`)
})

const UserRoutes = require('./routes/users')
const ArticleRoutes = require('./routes/articles')
app.use('/users', UserRoutes)
app.use('/articles', ArticleRoutes)

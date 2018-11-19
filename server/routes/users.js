const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')

router.post('/login', UserController.login)

router.post('/register', UserController.register)

router.post('/comments/:id', UserController.comments)

router.get('/comments/all', UserController.allComments  )
module.exports = router 
const express = require('express')
const router = express.Router()
const ArticleController = require('../controllers/ArticleController')

router.post('/add', ArticleController.add)

router.get('/all/', ArticleController.all)

router.patch('/edit/:id', ArticleController.edit)

router.delete('/delete/:id', ArticleController.delete)

router.get('/detail/:id', ArticleController.detail)


module.exports = router 
// const axios = require('axios')
const ModelArticle = require('../models/article')
class Article {
    static add(req, res){
        ModelArticle.create({
            title : req.body.title,
            content : req.body.content,
            date : new Date(),
        })
         .then(data=>{
             res.status(201).json({
                 message : 'Add data success'
             })
         })
         .catch(err=>{
             res.status(500).json({
                 message : 'Add Data Failed'
             })
         })
    }

    static all(req, res){
        ModelArticle.find()
         .then(data=>{
             res.status(201).json({
                 message : 'Get all data success',
                 data : data
             })
         })
         .catch(err=>{
             res.status(500).json({
                 message : 'Get All Data Failed'
             })
         })
    }

    static edit(req, res){
        ModelArticle.findByIdAndUpdate({_id : req.params.id},{
            title : req.body.title,
            content : req.body.content,
            date : new Date()
        })
         .then(data=>{
             res.status(201).json({
                 message : 'Edit  data success',
                 data : data
             })
         })
         .catch(err=>{
             res.status(500).json({
                 message : err
             })
         })
    }

    static delete(req, res){
        ModelArticle.findByIdAndDelete({_id : req.params.id})
         .then(data=>{
             res.status(201).json({
                 message : 'Delete  data success',
                 data : data
             })
         })
         .catch(err=>{
             res.status(500).json({
                 message : err
             })
         })
    }
    
    static detail(req, res){
        ModelArticle.findById({
            _id : req.params.id
        })
        .then(data=>{
            res.status(201).json({
                message : 'detail  data success',
                data : data
            })
        })
        .catch(err=>{
            res.status(500).json({
                message : err
            })
        })
    }
}

module.exports = Article
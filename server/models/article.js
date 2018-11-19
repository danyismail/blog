const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

const ArticleSchema = new Schema({
    title : String,
    content : String,
    date : {
        type : Date,
        default : new Date()
    },
    comments : [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
    // category : String,
    // UserId: [{ type: Schema.Types.ObjectId, ref: 'User' }]
})

module.exports =  Mongoose.model('Article', ArticleSchema)
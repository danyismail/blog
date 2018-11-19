const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

const CommentSchema = new Schema({
    comments : String,
    UserId : { type: Schema.Types.ObjectId, ref: 'User' }
})

module.exports = Mongoose.model('Comment', CommentSchema)
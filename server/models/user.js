const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

const UserSchema = new Schema({
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
    
})

module.exports = Mongoose.model('User', UserSchema)
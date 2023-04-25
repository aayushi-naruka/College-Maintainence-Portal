const mongoose = require('mongoose')

const Schema = mongoose.Schema;


const User = new Schema({
    userName: {
        type: String
    },
    password:{
        type: String
    },
    role:{
        type: String
    },
})

module.exports = mongoose.model('User', User)
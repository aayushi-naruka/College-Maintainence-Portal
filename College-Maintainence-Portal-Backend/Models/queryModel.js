const mongoose = require('mongoose')

const Schema = mongoose.Schema;


const Query = new Schema({
    department: {
        type: String
    },
    title:{
        type: String
    },
    room_no:{
        type: String
    },
    created_by:{
        type: String
    },
    created_date:{
        type: String
    }
})

module.exports = mongoose.model('Query', Query)
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

const connectToDb = (dbName) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(
            dbName,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
            .then((result) => {
                return resolve("mongoose connected")
            })
            .catch((err) => {
                return reject(err)
            })
    })
};

module.exports = connectToDb;
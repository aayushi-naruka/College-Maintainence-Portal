const mongoose = require('mongoose');

module.exports = () => {
    return new Promise((resolve, reject) => {
        if (mongoose.connection.readyState === 1) {
            mongoose.disconnect((err) => {
                if (err) return reject(new error_1.MongoServerClosedError(err));
                return resolve("Disconnected successfully");
            });
        } else {
            return reject(new error_1.MongoServerClosedError());
        }
    });
};
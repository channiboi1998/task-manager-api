const mongoose = require('mongoose');

const connectDB = (URL) => {
    mongoose.set("strictQuery", false);
    return mongoose.connect(URL);
}

module.exports = connectDB;
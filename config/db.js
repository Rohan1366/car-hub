const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const connectDB = () => {
    mongoose.connect(process.env.MONGODB_URL);
}

module.exports = connectDB;
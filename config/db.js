const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect(
            'mongodb+srv://orimforai:Qwertyui12345678@cluster0.2pwu0.mongodb.net/database'
            );
        console.log('MongoDB is connected');
    } catch (error) {
        console.log("MongoDB connection failed");
    }

};


module.exports = connectDB;
const mongoose = require('mongoose');

const connectionString = 'mongodb://127.0.0.1:27017/nodejs-projects';
// const connectionString = 'mongodb+srv://fakhar-zaman:noderoot@nodeexpressprojects.qfoyhbi.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority';

const connectDB = (url) => {
    return mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    });
}

module.exports = connectDB;
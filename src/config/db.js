const mongoose = require('mongoose');

function connectToDB(){
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Server connected to MongoDB");
    })
    .catch((err) => {
        console.log("Error connecting to MongoDB: ", err);
        process.exit(1);
    });
}

module.exports = connectToDB;
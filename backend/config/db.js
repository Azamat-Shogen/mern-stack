const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

// function connectDB(){
//     mongoose.connect("mongodb://localhost:27017/mern-stack");
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error"));
// db.once("open", function (){
//     console.log("Connected to the Database");
// });
// }

module.exports = connectDB;
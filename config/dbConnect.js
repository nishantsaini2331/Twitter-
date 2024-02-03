const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log("Db connected");
    } catch (err) {
        console.log("Err in db connection");
        console.log(err);
    }
};

module.exports = dbConnect;
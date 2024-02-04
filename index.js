const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./config/dbConnect");
const User = require("./model/userModel");
const app = express();
dotenv.config();
app.use(express.json());

const PORT = process.env.PORT

app.listen(PORT, async () => {


    console.log("Server started")
    dbConnect();


    await User.create({
        name:"nishant",
        email:"123@gmaill.com"
    })
});

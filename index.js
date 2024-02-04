const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./config/dbConnect");
const app = express();
dotenv.config();
const userRoute = require("./routes/userRoute");

app.use(express.json());

app.use("/api/v1", userRoute);

const PORT = process.env.PORT;

app.listen(PORT, async () => {
    console.log("Server started");
    dbConnect();
});

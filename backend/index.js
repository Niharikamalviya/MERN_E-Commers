const express = require("express");
const app = express();
const cookieParser = require("cookie-parser")

const cors = require('cors')
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}))

require('dotenv').config();
const PORT = process.env.PORT || 4000;


const connectDB = require('./config/database');
connectDB();


const router = require("./routes")
app.use("/api", router)

app.use(express.json());
app.use(cookieParser())


app.listen(PORT, () => {
    console.log("Server is running")
})
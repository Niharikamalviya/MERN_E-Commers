// 1 load envirnment variable
const express = require("express");

// 2. create express app intance
const app = express();

//3. cors , body parser, cookies, 
const cookieParser = require("cookie-parser")
require('dotenv').config();
const PORT = process.env.PORT || 4000;

const cors = require('cors')
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}))

app.use(express.json());
app.use(cookieParser())


// 4 db connection
const connectDB = require('./config/database');
connectDB();

//routes
const userRoutes = require("./routes/user")

app.use("/api/v1/auth", userRoutes)


app.listen(PORT, () => {
    console.log("Server is running")
})
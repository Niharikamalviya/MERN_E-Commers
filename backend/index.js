const express = require('express')
const cors = require('cors')
require('dotenv').config()
const connectDB = require('./config/database')

const app = express()
app.use(cors())

const PORT = 4000 || process.env.PORT

app.listen(PORT, () => {
    console.log("Server is running")
})
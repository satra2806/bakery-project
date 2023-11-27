const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const morgan = require('morgan')
// MIDDLEWEARES
dotenv.config({ path: './config/config.env' })
require('./config/db')
app.use(cors())
app.use(express.json())
app.use(morgan('dev')) // for logging
// ROUTES
app.use('/api/v1', require('./routers/foodOrder'))
PORT  = process.env.PORT || 3000
app.listen(PORT, console.log(`SERVER RUNNING ON PORT: ${PORT}`))
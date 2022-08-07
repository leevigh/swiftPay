require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')
const main = require('./src/routes')

const app = express()

let corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', main)

let PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log("Server running on", PORT);
})

module.exports = app;

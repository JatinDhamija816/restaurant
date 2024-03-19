const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const Connection = require('./DB/db')
const product = require('./Routes/Pdt')
const order = require('./Routes/Order')

const app = express()
// app.use(bodyParser())
app.use(express.json())

app.use('/', product)
app.use('/', order)

dotenv.config()
const port = (process.env.PORT) || 5000

app.listen(port, () => {
    console.log("Server Start")
})

Connection()

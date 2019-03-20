const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const SERVER_PORT =5578

app.use(bodyParser.json())

app.listen(SERVER_PORT, () => {
    console.log("listening on port:", SERVER_PORT)
})
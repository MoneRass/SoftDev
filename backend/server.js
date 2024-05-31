require('dotenv').config()

const express = require("express")

// express

const app = express()

// middleware

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// route

app.get('/', (req, res) => {
    res.json({msg: 'welcome'})
})

app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})
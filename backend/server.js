const express = require('express')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 4000
const mongoose = require('mongoose')
const cors = require('cors')
// cross origin resource sharing
app.use(cors())

//global middleware outputs which requests are being made
app.use(express.json())
app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
} )


app.use('/api/workouts', require('./routes/workouts'))

//connnect to DB
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    app.listen(PORT, () => {
        console.log('listening on', PORT)
    })
})
.catch((error) => {
    console.log(error)
})


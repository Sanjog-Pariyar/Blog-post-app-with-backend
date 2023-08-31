const express = require('express')
const cors = require('cors')
const app = express()


const connectDB = require('./db/connect')
require('dotenv').config()

const blogs = require('./route/blog-post')
const errorHandlerMiddleWare = require('./middleware/error-handler')
const notFound = require('./middleware/notFound')

app.use(cors())
app.use(express.json())
app.use('/api/v1/blogs', blogs)
app.use(notFound)
app.use(errorHandlerMiddleWare)


port = process.env.PORT || 3000 

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)

        app.listen(port, () => {
            console.log(`The server is listening on port ${port}...`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()
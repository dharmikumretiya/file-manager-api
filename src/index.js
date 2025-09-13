import 'dotenv/config.js';   
import express from 'express'
// use camCase for function name
import {fileRouter} from './routes/index.js'

const app=express()
const PORT = process.env.PORT
const HOSTNAME=process.env.HOSTNAME



// First middle ware for parsing requests
app.use(express.json())
// File Router 
app.use('/v0/files',fileRouter)



// start server and call callback function
app.listen( PORT,HOSTNAME , () => {
    console.log(`server is running at http://${HOSTNAME}:${PORT}`)
})
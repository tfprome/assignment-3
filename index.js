import express from 'express'
import {PORT} from './config/config.js'
import router from './api/api.js'



const app=express()

app.use("/api",router)


app.listen(PORT, ()=>{
     console.log(`Server running on port: ${PORT}`)
})
const express = require('express')
const app = express()

const requesttimeStampLogger = (req,res,next) => {
    const timeStamp = new Date().toDateString()
    console.log(`${timeStamp} from ${req.method} to ${req.url}`)
    next()
    
}

app.use(requesttimeStampLogger)

app.get('/', (req,res) =>{
    res.send("Home Page")
})

app.get('/about',(req,res) => {
    res.send("About Page")
})

const PORT = 3000;
app.listen(PORT,() => {
    console.log(`Your server running on port number ${PORT}`)
})
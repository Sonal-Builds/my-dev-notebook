const express = require('express')
const app = express()

const myFirstMiddleware = (req,res,next) => {
    console.log("this will run on every request")
    next()
}

app.use(myFirstMiddleware);

app.get('/',(req,res) => {
    res.send('this is my Home Page')
})

app.get('/about',(req,res) => {
    res.send('this is my about Page')
})

const PORT = 3000;

app.listen(PORT,() => {
    console.log(`Your server started on Port number: ${PORT}`)
})

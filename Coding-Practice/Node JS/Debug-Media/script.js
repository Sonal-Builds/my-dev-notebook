// const Interval = setInterval(() => {
//     console.log('Running')
// },1000)

// setTimeout(() => {
//     clearInterval(Interval)
// },4000)

// console.log(global)

// console.log(__filename)

// console.log(__dirname)

const path = require("path")
const fs = require("fs")


// console.log(path)
// console.log(path.join(__dirname,"api","Script.js"))

// console.log(fs)

// fs.mkdir(path.join(__dirname,"/Users","user.txt"),{recursive:true},(err) => {
//     if(err) throw err
// })

// fs.rmdir(path.join(__dirname,"/Api2"),{recursive:true},(err) => {
//     if(err) throw err
// })

// fs.rm(path.join(__dirname,"/Users"),{recursive:true},(err) => {
//     if(err) throw err
// })

// fs.writeFile(path.join(__dirname,"/Users/user.txt","user.txt"),"//Hey Sonal Welcome to Node.JS",(err) => {
//     if(err) throw err
// })

// fs.writeFile(path.join(__dirname,"/Api","text.txt"),"Code is Working",(err) => {
//     if(err) throw err
// })

// const user = "Amala"

// fs.appendFile(path.join(__dirname,"/Users/user.txt","user.txt"),`\n \t UserName : ${user}`,(err) => {
//     if(err) throw err
// })

// fs.readFile(path.join(__dirname,"/Users/user.txt","user.txt"),'utf8',(err,data) => {
//     if(err) throw err
//     console.log(data)
// })

// const eventEmitter = require('events') 
// const emiter = new eventEmitter()



// emiter.on("message",(data) => {
//     console.log(data)
// })
// emiter.on("task",(data) => {
//     console.log(data)
// })

// emiter.emit("message", {text:"User logged In"})
// emiter.emit("message", {text:"User went to about page"})
// emiter.emit("task", {text:"User went to details page"})

const http = require("http")

// http.createServer((req,res) => {
//     res.write("Let's Master Node JS")
//     console.log("Check")
//     res.end()
// }).listen(3001,() => {
//     console.log("Server is Running")
// })

// const server = http.createServer((req,res) => {
//     if(req.url == "/") {
//         console.log(req.url)
//         res.writeHead(200,{"Content-type": "text/html"})
//         res.end("<h1>Hi Sonal, Welcome to Node JS</h1>")
//     }

//     if(req.url == "/contact") {
//         console.log(req.url)
//         res.writeHead(200,{"Content-type": "text/html"})
//         res.end("<h1>Hi Sonal, Welcome to Contact Page</h1>")
//     }
    
// })

// server.listen(3001,() => {
//     console.log("server is running")
// })

const express = require("express")
const app = express()

// app.get("/",(req,res) => {
//     res.send("<h1>Leat's create the Server</h1>")
// })

// app.get("/Contact",(req,res) => {
//     res.send("<h1>Contact Page</h1>")
// })

// // app.get("*",(req,res) => {
// //     res.status(404).send("<h1>404</h1>")
// // })

// app.listen(3001,() => {
//     console.log("Server Running")
// })



function Token(req,res,next) {
    console.log(req.url)
    console.log("Token Creating")
    setTimeout(() => {
        const Token = 123
        req.user = Token
        next()
    },3000)
    
}

function Validation(req,res,next) {
    if(req.user) {
        console.log("Validation Done User Logged in")
        next()
        return
    }  
        console.log("validation Failed")
        res.send("<h1>Token Failed, User Not Logged</h1>")
    
}

function DateGenerator(req,res,next) {
    console.log(Date.now())
    next()
}

app.use(DateGenerator)


app.get('/',Token,Validation,(req,res) => {
    console.log("User Loged IN")
    res.send("<h1>Be consistend in Coding</h1>")
})

const PORT = process.env.PORT || 3001

app.listen(PORT)
    

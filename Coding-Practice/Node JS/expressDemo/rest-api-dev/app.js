const express = require("express")
const app = express()

//Middleware
app.use(express.json())

let books = [
    {
        id:'1',
        title:'Book 1'
    },
    {
        id:'2',
        title:'Book 2'
    }
]

app.get('/',(req,res) => {
    res.json({title:'Welcome to Books Store'})
})

app.get('/books',(req,res) => {
    res.json(books)
})

//get a single Book

app.get('/books/:bookId',(req,res) => {
    const bookId = req.params.bookId;
    const getBook = books.find(book => book.id === bookId)
    if(getBook) {
        res.status(200).json(getBook)
    } else {
        res.status(404).json({message:"The Book is not Found"})
    }
})

// POST method -> Add a book

app.post('/books',(req,res) => {
    const newbook = {
        id: `${books.length + 1}`,
        title: `Books ${books.length + 1}`
    }
    books.push(newbook)
    res.status(200).json({
            message:'New Book Added',
            data:books
        })
    
})

// PUT Method -> to update specific Book

app.put('/update/:bookId',(req,res) => {
    const currentBook = books.find(book => book.id === req.params.bookId)
    if(currentBook) {
        currentBook.title = req.body.title || currentBook.title
        res.status(200).json({
            message:`Book with Id ${req.params.bookId} is updated`,
            data:currentBook
        })
    } else {
        res.status(404).json({
            message:"The Book Is not Available"
        })
    }
    
})

//DELETE Method --> to delete a book

app.delete('/delete/:bookId',(req,res) => {
    const indexOfBook = books.findIndex(book => book.id === req.params.bookId);
    if(indexOfBook !== -1) {
        const deletedBook = books.splice(indexOfBook,1)
        res.status(200).json({
            message:"Book is sucessfully Deleted",
            bookDeleted:deletedBook
        })
    } else {
        res.status(404).json({
            message:"Book is not found"
        })
    }
})

const PORT = 3000;
app.listen(PORT,() => {
    console.log(`server started on port number ${PORT}`)
})
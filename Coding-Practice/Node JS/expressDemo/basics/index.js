const express = require('express')

const app = express()

app.get('/',(req,res) => {
    res.send("Welocome to Node Js ")
})

app.get('/products',(req,res) => {
    const products = [
        {
            id:'1',
            label:'products 1'
        },
        {
            id:'2',
            label:'products 2'
        }
    ]
    res.json(products)
})

// Dynamic route

app.get('/products/:ProductId',(req,res) => {
    productId = req.params.ProductId
    console.log(req.params)
    const products = [
        {
            id:'1',
            label:'products 1'
        },
        {
            id:'2',
            label:'products 2'
        }
    ]
    const getProduct = products.find(pro => pro.id === productId)
    if(getProduct) {
        res.json(getProduct)
    } else {
        res.status(404).send("Product is not Found")
    }
})

const PORT = 3000

app.listen(PORT,()=> {
    console.log("Our Server is started")
})
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

let books={
    java:['complete reference','cook book','how to do it in java','head first'],
    node:['NodeJs in Action','NodeJs Projects'],
    angular:['learning angular 6']
}

app.get('/',(req,res)=>{
    res.send('pinged')
})

app.get('/books',(req,res)=>{
    if(req.query.limit >= 0){
        res.send(Object.entries(books).slice(0,req.query.limit).map(entry => entry))
    }
    else{
        res.json(books)
    }
})
 

app.get('/book/:skill',(req,res)=>{
    let bookName = books[req.params.skill]
    if(!bookName){
        res.status(404).send('not found')
    }else{
        res.send(bookName)
    }
   
})

app.listen('4100',()=>{
    console.log('server is up')
})
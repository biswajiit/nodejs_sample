const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017'
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))

mongoClient.connect(url,{useNewUrlParser:true},(err,client)=>{
    if(err) throw err
    console.log('Connected to MongoDb sucessfully...')
    db = client.db('nov28db')
})


app.get('/login',(req,res)=>{
    db.collection('users').find(req.query).toArray((err,docs)=>{
        if(err) throw err
        if(docs.length >0){
            res.status(200).send('authorized')
        }
        else{
            res.status(401).send('Not an authorized User')
        }
    })
}) 

app.post('/register',(req,res)=>{
    db.collection('users').insertOne(req.body,(err,result) =>{
        if(err) throw err
        console.log('inserted record')
    })
    res.send('registered sucessfully...')
})

app.get('/address',(req,res)=>{
    let address = {
        name:'biswajit',
        location:'bangalore'
    }
    res.send(address)
})

app.listen('8082',()=>{
    console.log('server is up')
})

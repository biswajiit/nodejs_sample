const mongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017'
mongoClient.connect(url,{useNewUrlParser:true},(err,client)=>{
    if(err) throw err
    console.log('Connected to MongoDb sucessfully...')
    let db = client.db('nov28db')
    db.createCollection('users')
    let users = [
        {uname:"user1",password:'user1@123'},
        {uname:"user2",password:'user2@123'},
        {uname:"user3",password:'user3@123'},
        {uname:"user4",password:'user4@123'},
        {uname:"user5",password:'user5@123'},
        {uname:"user6",password:'user6@123'}
    ]
    //db.collection('users').insertMany(users,(err,result)=>{
    //    if(err) throw err
    //    console.log('insertion happened')
    //})

    db.collection('users').updateMany({},{$set:{location:'bangalore'}},(err,res)=>{
        if(err) throw err
        console.log('update happened in'+ res.modifiedCount+' records')
    })

    db.collection('users').find().toArray((err,docs) =>{
        if(err) throw err
        console.log(docs)
    })

    client.close()
})
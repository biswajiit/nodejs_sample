const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017/nov28db'

mongoose.connect(url,(err)=>{
    if(err) throw err
    console.log('connected to monoDb by mongoose')
})

let mySchema = mongoose.Schema

let personSchema = new mySchema({
    name: String,
    city: String,
    hobies: Array
},{collection:'person'})

let person = mongoose.model('person',personSchema)
let p1 = new person({
  })
p1.save((err)=>{
    if(err) throw err
    mongoose.disconnect()
})

//load the event emitter module
const EventEmitter= require('events').EventEmitter

//create a class to extend it , not able to create an object after version 8
class MyEventEmitter extends EventEmitter{}

//create a eventObj

let event =  new MyEventEmitter()
event.once('knock',(name)=>{
    console.log(name + ' knocked once')
})
event.on('knock',() => {
    console.log("who is this")
})

event.emit('knock','biswajit')
event.emit('knock')
event.emit('knock')
event.emit('knock')
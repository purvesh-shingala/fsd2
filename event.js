var e = require('events')
var ee=new e.EventEmitter()
ee.on("sayName",()=>{
    console.log('my name is Purvesh')
})
ee.emit("sayName")
console.log("------------------------------------------------------------------------------------")
//create a function which executes when connect handler event is fire and print massage connection successull after connect handeler another event has to trigger data receive has able to print data received successfully  

ee.on("ConnectHandler",()=>{
    console.log('connection successfully')
    ee.on("Trigger",function(){
        console.log('data received successfully')
    })
    ee.emit("Trigger")

})
ee.emit("ConnectHandler")
console.log("------------------------------------------------------------------------------------")
ee.on('sayName',(edge,msg)=>{
    console.log(`${edge} bcvhjasvf ${msg}`)
})
ee.emit('sayName',200,"purvesh")
//write node js script to create to listeners for common event call their respective with propper massage print number of events associated with emmiter remove one of the listener and print number of remaining listeners
console.log("------------------------------------------------------------------------------------")
var l1=function l1(){console.log("listner 1")}
var l2=function l2(){console.log("listner 2")}

ee.addListener("conn",l1)
ee.addListener("conn",l2)

var count= ee.listenerCount("conn")
console.log(count+"for event")

ee.emit("conn")
console.log("after remove")
ee.removeListener("conn",l1)
var count=ee.listenerCount("conn")
console.log(count+"for event")

ee.emit("conn")

var count = ee.removeAllListeners("conn")
console.log(count)

ee.emit("conn")
fs=require("fs")
var e = require('events')
var ee=new e.EventEmitter()

ee.on("getfile",()=>{
    fs.writeFile("my.txt","This is Data",(e)=>{
        if(e){
            console.log(e)
        }else{
            fs.readFile("my.txt","utf-8",(e,data)=>{
                if(e){
                    console.log(e)
                }else{
                    console.log(data)
                }
            })
        }
    })
})
ee.emit("getfile")

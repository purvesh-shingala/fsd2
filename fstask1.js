const fs=require("fs")
var a=[1,2,4,5,3]
var b= JSON.stringify(a)
fs.writeFileSync("t1.txt",b)
data=fs.readFileSync("t1.txt",b,"utf-8")
console.log(data)
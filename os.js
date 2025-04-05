os=require('os')
console.log(os.arch())
console.log(os.hostname())
console.log(os.platform())
console.log(os.tmpdir())
data=os.freemem()/(1024 * 1024 * 1024)
fs=require('fs')
if(data>1){
    console.log('YESSSSSSSS')
}else{
    console.log('NOOOOOOOO')
}

var msg=function(){
    const time = new Date().toLocaleTimeString()
    console.log(time) 
}

// setTimeout(msg,3000)
setInterval(msg,5000)
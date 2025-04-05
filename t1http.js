// create js file to handle a server which has home page to display welcome to home page in h1 tag about page if user should provide msg you are on about page if user asked for othrt page it shoul provide msg page not found by setting 404
http=require('http')
a=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'})

    
    if(req.url=="/"){
        res.write("<h1>Welcome to Home Page</h1>")
        res.end()
        
    }else if(req.url=="/about"){
        res.write("<h1>you are on about page</h1>")
        res.end()
    }else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write("page not found")
        res.end()
    }

})
a.listen(5054)
console.log('Server Connected')
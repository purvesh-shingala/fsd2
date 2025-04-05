// url=require('url')
// attr="https://sites.google.com/views/search/?year=2025&month=april"
// u=url.parse(attr,true)

// console.log(u)
// console.log(u.quary)



// http=require('http')
// fs=require('fs')
// url=require('url')
// a=http.createServer((req,res)=>{
//     res.writeHead(200,{'content-type':'text/html'})

    
//    c=url.parse(req.url,true).query;
//    console.log(c.year+"..."+c.month)

// })
// a.listen(3000)
// console.log('server connected')



http=require('http')
fs=require('fs')
url=require('url')
a=http.createServer((req,res)=>{
    

    
   var c=url.parse(req.url,true);
   data=fs.readFileSync("."+c.pathname)
   res.writeHead(200,{'content-type':'text/html'})
   res.write(data)
   res.end()

})
a.listen(3000)
console.log('server connected')
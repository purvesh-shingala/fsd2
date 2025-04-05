// http = require("http");
// fs = require("fs")

// server = http.createServer((req, res) => {

//     // res.writeHead(200, { 'content-type': 'text/html' })

//     if (req.url == "/image") {
//         var a = fs.readFileSync('a1.png')
//         res.writeHead(200, { 'content-type': 'image/png' })
//         res.write(a)
//         res.end()
//     }else if(req.url=="/timeout"){
//         res.write(`<html>
//                 <body>
//                     <script>
//                         setTimeout(function(){
//                             document.write("hello")
//                         },5000)
//                     </script>
//                 </body>
//             </html>`
            
//         )
//     }



// }
// )
// server.listen(5053)
// console.log('server Connected')











// if(req.url=='/'){
//     const a={"name":"purvesh","age":19}
//     // res.writeHead(200,{'content-type':'text/html'})
//     res.writeHead(200,{'content-type':'application/JSON'})
//     res.write(JSON.stringify(a))
//     res.end()

// }






// res.write(`<html>
//     <body>
//     <form>
//     <hr>Username : <input type="text" placeholder="name"/></n></hr>
//     <hr>Password : <input type="password" placeholder="password"/></n></hr>
//     <hr><input type="submit" value="submit"><hr>


//     </form>
//     </body>
//     </html>`)






// server=http.createServer((req,res)=>{
//     res.writeHead(200,{'content-type':'text/html'})
//     res.write(req.url)

//     res.write("Hello")
//     res.write("<h1>How r u ?</h1>")
//     res.end()
// })






const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    let filePath = path.join(__dirname, 'pages', parsedUrl.pathname + '.html');

    // If root URL, serve home page
    if (parsedUrl.pathname === '/') {
        filePath = path.join(__dirname, 'pages', 'home.html');
    }

    // Check if the requested file exists
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h2>404 - Page Not Found</h2>');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
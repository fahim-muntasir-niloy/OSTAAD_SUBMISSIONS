let HTTP = require('http')
let FS = require('fs')

let server = HTTP.createServer(function(req,res){
    if(req.url == '/'){
        let page = FS.readFileSync('index.html');
        res.end(page)
    }
    else if(req.url == '/contacts'){
        let page = FS.readFileSync('contacts.html','utf-8');
        res.end(page)
    }
    else if(req.url == '/about'){
        let page = FS.readFileSync('about.html','utf-8');
        res.end(page)
    }
})

server.listen(5050)
console.log("Server at 5050 Success 🤖");
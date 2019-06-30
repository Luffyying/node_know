let log = console.log
var http = require('http')
var server = http.createServer(function(req,res){
    log(req)
    log('启动一个node服务')
    res.writeHead(200,{
        "Content-type":"text/plain"
    })
    res.end('hello server')
})
server.listen(8080)
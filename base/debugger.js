let log = console.log
var http = require('http')
var server = http.createServer(function(req,res){
    log(req)
    log('启动一个node服务')
    var body = 'hello'
    var bodyLength = body.length
    // var breakpoint = "debugger"
    res.writeHead(200,{
        "Content-type":"text/plain",
        "Content-length":bodyLength
    })
    res.end('hello server')
})
server.listen(8080)
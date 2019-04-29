const http = require('http')

http.createServer(function(req, res){
  res.writeHead(200,{'Content-Type': 'text/plain'})
  res.end('hello world newjean')
}).listen(80)

console.log('测试运行中！')

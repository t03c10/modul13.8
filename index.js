var http = require('http');
var fs = require('fs');
var server = http.createServer();

server.on('request', function (request, response) {
    if (request.method === 'GET' && request.url === '/') {
        fs.readFile('./index.html', 'utf-8', function (err, data) {
            response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
            if (!err) response.write(data);
            response.end();
        });
    } else {
        fs.readFile('./e404.jpg', function (err, data) {
            response.statusCode = 404;
            if (!err) response.write(data);
            response.end();
        });
    }
});
server.listen(9000);
var http = require('http');

http.createServer(function (request, response) {
    homeRoute(request, response);
}).listen(5000, '127.0.0.1');

console.log('Server running at....')

function homeRoute(request, response) {
    if (request.url === '/') {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write('Header\n');
        response.write('Search\n');
        response.write('Footer\n');
    }
}
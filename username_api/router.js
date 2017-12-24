function home(request, response) {
    if (request.url === '/') {
        // response.setHeader("Content-Length", "");
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.write('Header\n');
        response.write('Search\n');
        response.end('Footer\n');
    }
}

function user(request, response) {
    var username = request.url.replace('/', '');
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Header\n');
    response.write(username + '\n');
    response.end('Footer\n');

}

module.exports.home = home;
module.exports.user = user;
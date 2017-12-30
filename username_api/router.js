var Profile = require("./profile.js");

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
    if (username.length > 0) {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.write('Header\n');
        var studentProfile = new Profile(username);
        studentProfile.on('end', function(profileJSON) {

            var values = {
                avatarUrl: profileJSON.gravatar_url,
                username:
                badges:
                javascriptPoints:
            }
        });
        
        studentProfile.on("error", console.error);
        response.write(username + '\n');
        response.end('Footer\n');
    }

}

module.exports.home = home;
module.exports.user = user;
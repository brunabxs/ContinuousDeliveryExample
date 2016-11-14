var http = require('http');

var PORT = process.env.PORT || 8080;

var server = http.createServer(function (request, response) {
    response.end('It Works! Version 1');
});

server.listen(PORT, function () {
    console.log("Server listening on: http://localhost:%s", PORT);
});
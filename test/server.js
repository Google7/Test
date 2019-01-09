var http = require("http");
http.createServer(function (request, response) {
    console.log(request.method + ': ' + request.url);
    response.writeHead(200, {
        "Content-Type": "text/html"
    });
    response.end("<h1>Hello world!</h1>");
}).listen(8082);
console.log(`http://localhost:8082/`);
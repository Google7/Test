var http = require("http");
var url = require("url");

function start(route) {
    function service(request, response) {
        var pathName = url.parse(request.url).pathname;
        console.log("service=>"+pathName);
        route(pathName);
        response.writeHead(200, {
            "Content-Type": "text/html"
        });
        response.write("<h1 style='color:red'>Hello World!</h1>");
        response.end();
    }
    http.createServer(service).listen(8082);
    console.log(`http://localhost:8082/`);
}
exports.start = start;
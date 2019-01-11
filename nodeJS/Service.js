var http = require("http");
var fs = require("fs");
var url = require("url");

function start(route) {
    function service(request, response) {
        var pathName = url.parse(request.url).pathname;
        if (pathName == "/favicon.ico") {
            return;
        }
        console.log("service=>" + pathName);
        fs.readFile(pathName.substr(1), function (err, data) {
            if (err) {
                console.log(err)
                response.writeHead(404, {
                    "Content-Type": "text/html"
                })
            } else {
                response.writeHead(200, {
                    "Content-Type": "text/html"
                });
                response.write(data.toString());
                response.end();
            }
        });
        route(pathName);
    }
    http.createServer(service).listen(8082);
    console.log(`http://localhost:8082/index.html`);
}
exports.start = start;
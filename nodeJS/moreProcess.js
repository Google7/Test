var child_process = require("child_process");

function execMethod() {
    for (var i = 0; i <= 5; i++) {
        var workerProcess = child_process.exec(`node support.js ${i}`, function (err, stdout) {
            if (err) throw err;
            console.log(`stdout:${stdout}`);
        });
        workerProcess.on("exit", function (code) {
            console.log(`退出码:${code}`);
        });

    }
}

function spawnMethod() {
    for (var i = 0; i <= 5; i++) {
        var workProcess = child_process.spawn("node", ["support.js", i]);
        workProcess.stdout.on("data", function (data) {
            console.log(`stdout:${data}`);
        });
        workProcess.on("close", function (code) {
            console.log(`退出码:${code}`);
        });
    }
}

function forkMethod() {
    for (var i = 0; i <= 5; i++) {
        var workProcess = child_process.fork("support.js", [i]);
        workProcess.on("close", function (code) {
            console.log(`退出码:${code}`);
        });
    }
}
execMethod()

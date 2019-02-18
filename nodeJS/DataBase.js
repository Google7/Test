let mysql = require("mysql");
let events = require("events");
let eventEmitter = new events.EventEmitter();
let fs = require("fs");
let jsonStr ='{"result":true}';
const config = {
    host: "localhost",
    user: "root",
    password: "password",
    port: "3306",
    database: "testdb"
}
let select = "select * from userinfo";
let insert = "insert into userinfo set ?";
let del = "delete from userinfo where userid = ?"
let update = "update userinfo set username = ? where userid = ?"
let login = "select * from userinfo where username = ? and userpwd = ?"
let user = {
    username: 'abc',
    userpwd: 'def',
    usersex: 1,
    userage: null,
    usercity: null
}
let connect = mysql.createConnection(config);
let pool = mysql.createPool(config);

function execute(task, param) {
    pool.getConnection(function (err, con) {
        if (err) {
            console.log(`数据库连接失败:${err}`);
            autoConnect(connect);
        } else {
            console.log(`数据库连接成功`);
            task(con, param);
        }
    });
}

function insertData(con, obj) {
    con.query(insert, obj, function (err, result) {
        if (err) {
            console.log(`插入失败：${err}`);
        } else {
            console.log(`成功插入${result.affectedRows}条数据`);
        }
        closeMySQL(con);
    });
}

function deleteData(con, num) {
    con.query(del, num, function (err, result) {
        if (err) {
            console.log(`删除失败：${err}`);
        } else {
            if (result.affectedRows == 0) {
                console.log(`数据已删除`);
            } else {
                console.log(`成功删除${result.affectedRows}条数据`);
            }
        }
        closeMySQL(con);
    });
}

function updateDate(con, array) {
    con.query(update, array, function (err) {
        if (err) {
            console.log(`更改失败:${err}`);
        } else {
            console.log(`更改成功`);
        }
        closeMySQL(con);
    });
}

function selectData(con, index) {
    con.query(select, function (err, result) {
        if (err || index >= result.length) {
            console.log(`查询失败：${err}`);
        } else {
            if (index != null) {
                console.log(`查询成功`);
                console.log(result[index].userid + "--" +
                    result[index].username + "--" + result[index].userpwd + "--" +
                    result[index].usersex + "--" + result[index].userage + "--" +
                    result[index].usercity);
            } else {
                console.log(`查询到${result.length}条数据`);
                for (const i in result) {
                    console.log(result[i].userid + "--" +
                        result[i].username + "--" + result[i].userpwd + "--" +
                        result[i].usersex + "--" + result[i].userage + "--" +
                        result[i].usercity);
                }
            }
        }
        closeMySQL(con);
    });
}

function toLogin(array) {
    connect.connect(function (err) {
        if (err) throw err;
        console.log("数据库连接成功");
        connect.query(login, array, function(errs, result) {
            if (err) throw errs;
            if (result[0] != null) {
                console.log(result);
                fs.writeFile(`${__dirname}/test.txt`,jsonStr,"utf-8",function(err){
                    if(err) throw err;
                    console.log("写入成功");
                });
            } else {
                console.log(false);
            }
            connect.end();
            console.log("数据库关闭成功");
        });
    });
}

var autoConnect = function () {
    let n = 0;
    return function (con, param) {
        if (n < 10) {
            n += 1;
            con.connect(function (err) {
                if (err) {
                    console.log(`正在重新连接。。。${n} ${err}`);
                    setTimeout(function () {
                        autoConnect(con);
                    }, 2000);
                } else {
                    console.log(`数据库连接成功`);
                    task(con, param);
                }
            });
        } else {
            console.log(`连不上，就是连不上啊 =_=`)
        }
    }
}();

function closeMySQL(con) {
    if (con) {
        con.release();
        pool.end();
        console.log(`数据库关闭成功`);
    } else {
        console.log(`数据库关闭失败`);
    }
}

exports.toLogin = toLogin;

execute(selectData);

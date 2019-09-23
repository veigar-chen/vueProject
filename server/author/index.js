const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const cookieParse = require("cookie-parser");


let secret = "www.chenzhonglai.app"; //密钥

exports.cookie = cookieParse(secret); //设置cookie  cookieParse，name value 密钥

let sessionStore = new MySQLStore(require("../Config/db_config"));

exports.session = session({
    key: 'chenzhonglai', //自行设置密钥
    secret: secret, //私钥
    cookie: {
        maxAge: 24 * 60 * 60 * 1000 //最大生命期
    },
    store: sessionStore, //存储管理器
    resave: false,
    saveUninitialized: false
})
exports.cors = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Headers", "content-type,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8"); //
    res.header("Access-Control-Allow-Credentials", true); //允许携带凭证
    // 表示路由继续往下匹配
    next();
}
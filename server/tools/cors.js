exports.cors = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:8081");
    res.header("Access-Control-Allow-Headers", "content-type,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8"); //
<<<<<<< HEAD
    res.header("Access-Control-Allow-Credentials", true); //����Я��ƾ֤
    // ��ʾ·�ɼ�������ƥ��
=======
    res.header("Access-Control-Allow-Credentials", true); //允许携带凭证
    // 表示路由继续往下匹配
>>>>>>> a8fcc88009387e6c93ab1d9932a5411c7bb0a8e7
    next();
}
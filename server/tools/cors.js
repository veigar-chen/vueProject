exports.cors = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:8081");
    res.header("Access-Control-Allow-Headers", "content-type,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8"); //
    res.header("Access-Control-Allow-Credentials", true); //����Я��ƾ֤
    // ��ʾ·�ɼ�������ƥ��
    next();
}
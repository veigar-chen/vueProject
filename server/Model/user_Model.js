const dbModel = require("./db_Model");

class UserModel extends dbModel {
    constructor() {
        super();
        this.table = "user";
    }

    isExist(user, callback) {
        let sql = `select * from user where userName = '${user}'`;
        this.conn.query(sql, (error, result) => {
            if (error) {
                console.log(error);
                return;
            }
            callback(result);
        })
    }

    register(userInfo, callback) {
        let sql = `insert into user (userName,passWord) values('${userInfo.user}','${userInfo.pass}')`;
        this.conn.query(sql, (error, result) => {
            if (error) {
                console.log(error);
                return;
            }
            callback(result);
        })
    }


    //用户登录
    login(userName, callback) {
        let sql = `select * from ${this.table} where userName = '${userName}'`;
        this.conn.query(sql, (error, result) => {
            if (error) {
                console.log(error);
                return;
            }
            callback(result);
        })
    }
}

module.exports = UserModel;
const dbModel = require("./db_Model");

class UserModel extends dbModel {
    constructor() {
        super();
        this.table = "user";
    }

    isExist(user, callback) {
        let key = "";
        let vlaue = ""
        for (const item in user) {
            if (user.hasOwnProperty(item)) {
                key += item;
                vlaue += user[item];
            }
        }
        let sql = `select * from user where ${key} = '${vlaue}'`;
        this.conn.query(sql, (error, result) => {
            if (error) {
                console.log(error);
                return;
            }
            callback(result);
            this.close();
        })
    }

    register(userInfo, callback) {
        let keyStr = "",
            valueArr = [],
            alt = "",
            isFirst = true;
        for (const key in userInfo) {
            if (userInfo.hasOwnProperty(key)) {
                keyStr += (isFirst ? "" : ",") + key;
                valueArr.push(userInfo[key]);
                alt += (isFirst ? "" : ",") + "?";
                isFirst = false;
            }
        }
        let sql = `INSERT INTO ${this.table} (${keyStr}) values(${alt})`;
        this.conn.query(sql, valueArr, (error, result) => {
            if (error) {
                console.log(error)
                callback(error);
            } else {
                callback(result);
            }
            this.close();
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
            this.close();
        })
    }
}

module.exports = UserModel;
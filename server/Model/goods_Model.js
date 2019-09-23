const dbModel = require("./db_Model");

class GoodsModel extends dbModel {
    constructor() {
        super();
        this.table = "goods";
    }

    //添加商品的函数
    addGoods(goodsInfo, callback) {
        let keyStr = "",
            valueArr = [],
            alt = "",
            isFirst = true;
        for (const key in goodsInfo) {
            if (goodsInfo.hasOwnProperty(key)) {
                keyStr += (isFirst ? "" : ",") + key;
                valueArr.push(goodsInfo[key]);
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

    //删除商品的函数
    delGoods(sid, gid, callback) {
        let sql = `delete from ${this.table} where sid=${sid} and gid= ${gid}`;
        this.conn.query(sql, (error, result) => {
            if (error) {
                console.log(error);
            } else {
                callback(result);
            }
        })
    }

    //获取一个商品信息的函数
    getGoods(gid, callback) {
        let sql = `select * from ${this.table} where gid= ${gid}`;
        this.conn.query(sql, (error, result) => {
            if (error) {
                console.log(error);
            } else {
                callback(result);
            }
        })
    }


    //修改一个商品信息的函数
    editGoods(goodsInfo, callback) {
        let sid = goodsInfo.sid;
        let gid = goodsInfo.gid;
        delete goodsInfo.sid;
        delete goodsInfo.gid;
        let gValues = [];
        let gStr = "";
        let isFirst = true;
        for (const key in goodsInfo) {
            if (goodsInfo.hasOwnProperty(key)) {
                gStr += (isFirst ? "" : ",") + key + "=?";
                isFirst = false;
                gValues.push(goodsInfo[key]);
            }
        }
        let sql = `update  ${this.table} set ${gStr} where gid=${gid} and sid=${sid}`;
        this.conn.query(sql, gValues, (error, result) => {
            if (error) {
                console.log(error);
            } else {
                callback(result);
            }
        })
    }

    //获取所有商品信息
    getAllGoods(callback) {
        let sql = `select * from ${this.table}`;
        this.conn.query(sql, (error, result) => {
            if (error) {
                console.log(error);
            } else {
                callback(result);
            }
        })
    }

}



module.exports = GoodsModel;
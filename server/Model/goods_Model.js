const dbModel = require("./db_Model");

class GoodsModel extends dbModel {
    constructor() {
        super();
        this.table = "goods";
    }

    //获取所有商品信息
    getAllGoods(callback) {
        // select s.shopName,g.* from shop as s,goods as g where s.sid=g.sid
        let sql = `SELECT s.shopName,g.* FROM goods AS g INNER JOIN shop AS s ON g.sid = s.sid`;

        this.conn.query(sql, (error, result) => {
            if (error) {
                console.log(error);
            } else {
                console.log(result);
                callback(result);
            }
        })
    }

}

module.exports = GoodsModel;
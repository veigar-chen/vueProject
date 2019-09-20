const dbModel = require("./db_Model");

class ShopModel extends dbModel {
    constructor() {
        super();
        this.table = "shop";
    }

    getShopGoods(shopId, callback) {
        let sql = `select * from goods where sid = ${shopId}`
        this.conn.query(sql, (error, results) => {
            if (error) {
                console.log(error);
            } else {
                callback(results);
            }
        })
    }
}

module.exports = ShopModel;
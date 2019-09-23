const dbModel = require("./db_Model");

class GoodsModel extends dbModel {
    constructor() {
        super();
        this.table = "goods";
    }

    getAllInfo(gid, callback) {
        let sql = `select * from goods where gid = ${gid};
                   select * from shop where sid = (SELECT g.sid FROM (SELECT * FROM goods WHERE gid = ${gid}) AS g);
                   select * from comments where gid = ${gid}`;
        this.conn.query(sql, (err, results) => {
            if (err) {
                console.log(err);
            } else {
                callback(results);
            }
            this.close();
        })
        
    }
    //通过sid获取商品//
    getgoods(sid, callback) {
        let sql = `select * from ${this.table} where sid=? limit 0,4 `
        this.conn.query(sql, [sid], (err, result) => {
            if (err) {
                console.log(err)
                callback(err)

            } else {
                //   console.log(result)
                callback(result)
            }
            this.conn.end()
        })
    }
}

module.exports = GoodsModel;
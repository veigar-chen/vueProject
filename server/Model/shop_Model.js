const dbModel = require("./db_Model");

class ShopModel extends dbModel {
    constructor() {
        super();
        this.table = "shop";
    }

    //������Ʒ�ĺ���
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
        let sql = `INSERT INTO goods (${keyStr}) values(${alt})`;
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

    //ɾ����Ʒ�ĺ���
    delGoods(sid, gid, callback) {
        let sql = `delete from goods where sid=${sid} and gid= ${gid}`;
        this.conn.query(sql, (error, result) => {
            if (error) {
                console.log(error);
            } else {
                callback(result);
            }
        })
    }

    //��ȡһ����Ʒ��Ϣ�ĺ���
    getGoods(gid, callback) {
        let sql = `select * from goods where gid= ${gid}`;
        this.conn.query(sql, (error, result) => {
            if (error) {
                console.log(error);
            } else {
                callback(result);
            }
        })
    }


    //�޸�һ����Ʒ��Ϣ�ĺ���
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
        let sql = `update  goods set ${gStr} where gid=${gid} and sid=${sid}`;
        this.conn.query(sql, gValues, (error, result) => {
            if (error) {
                console.log(error);
            } else {
                callback(result);
            }
        })
    }

    //��ȡ�̻�����Ʒ
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

    //�̻���½
    login(shopId, callback) {
        let sql = `select * from ${this.table} where sid = ${shopId}`
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
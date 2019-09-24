const dbModel = require("./db_Model");

class ShopModel extends dbModel {
	constructor() {
		super();
		this.table = "shop";
	}

	//商铺商品添加
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

	//商铺商品删除
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

	//获取商铺商品
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


	//编辑商铺商品
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

	//获取商品
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




	sdbdoods(cid, callback) {
		let sql = `select * from chart where cid LIMIT 0,5`
		this.conn.query(sql, (error, results) => {
			if (error) {
				console.log(error);
			} else {
				callback(results);
			}
		})
	}
	sdbbrand(sid, callback) {
		console.log(sid);
		let sql = `SELECT * FROM  ${this.table} WHERE sid  LIMIT 0,18`;
		this.conn.query(sql, [sid], (error, results) => {
			if (error) {
				console.log(error);
				callback(error);
			} else {
				callback(results);
			}
		})
	}


	//商户登录
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

	//获取商铺信息
	getshops(sid, callback) {
		let sql = `select * from ${this.table} where sid=? `
		this.conn.query(sql, [sid], (err, result) => {
			if (err) {
				console.log(err)
				callback(err)

			} else {
				//   console.log(result)
				callback(result)
			}

		})
	}


	//获取商铺列表
	getsidlist(page, callback) {
		page = (page - 1) * 15
		let sql = `select sid from ${this.table} limit ${page},15`
		this.conn.query(sql, (err, result) => {
			if (err) {
				console.log(err)
				callback(err)
			} else {
				// console.log(result)
				callback(result)
			}
		})
	}

}

module.exports = ShopModel;

const dbModel = require("./db_Model");

class GoodsModel extends dbModel {
    constructor() {
        super();
        this.table = "goods";
    }
}

module.exports = GoodsModel;
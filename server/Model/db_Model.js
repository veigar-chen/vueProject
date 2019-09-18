const mysql = require("mysql");

class dbModel {
    constructor() {
        this.conn = mysql.createConnection(require("../Config/db_config"));
        this.conn.connect();
    }

    close() {
        this.conn.end();
    }
}

module.exports = dbModel;
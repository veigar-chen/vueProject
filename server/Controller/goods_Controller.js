const express = require('express');
const router = express.Router();
const GoodsModel = require("../Model/goods_Model");
const multer = require("multer"); //图片模块

//上传的图片存储，destination上传的路径,filename文件命名
let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, __dirname + "/../goodsPhoto/")
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});

let upload = multer({ storage: storage });

router.post("/Photo", upload.single("file"), (req, res) => {
    let hostUrl = "http://localhost:8888/goodsPhoto/";
    let adress = hostUrl + req.file.filename;
    res.json({ adress });
})

//商品添加
router.post("/add", (req, res) => {
    let goodsModel = new GoodsModel();
    goodsModel.addGoods(req.body, (results) => {
        res.json(results);
    })
})

//商品删除
router.post("/del", (req, res) => {
    let goodsModel = new GoodsModel();
    goodsModel.delGoods(req.body.shopId, req.body.goodsId, (result) => {
        let re = {
            code: 1
        }
        if (!result.affectedRows) {
            re = { code: -1 }
        }
        res.json(re);
    })
})


//获取一个商品的信息
router.post("/getGoods", (req, res) => {
    let goodsModel = new GoodsModel();
    goodsModel.getGoods(req.body.goodsId, (result) => {
        res.json(result);
    })
})

//商品删除
router.post("/edit", (req, res) => {
    let goodsModel = new GoodsModel();
    goodsModel.editGoods(req.body, (result) => {
        let re = {
            code: 1
        }
        if (!result.affectedRows) {
            re = { code: -1 }
        }
        res.json(re);
    })
})

module.exports = router;
const express = require('express');
const router = express.Router();
const ShopModel = require("../Model/Shop_Model");
const multer = require("multer"); //图片模块

//上传的图片存储，destination上传的路径,filename文件命名
let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, __dirname + "/../avatar/")
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});

let upload = multer({ storage: storage });

router.post("/avatar", upload.single("file"), (req, res) => {
    let hostUrl = "http://localhost:8888/avatar/";
    let adress = hostUrl + req.file.filename;
    res.json({ adress });
})


router.post("/", (req, res) => {
    let shopModel = new ShopModel();
    shopModel.getShopGoods(req.body.shopId, (results) => {
        res.json(results);
    })
})

module.exports = router;
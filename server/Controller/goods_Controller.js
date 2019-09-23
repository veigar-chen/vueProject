const express = require('express');
const router = express.Router();
const GoodsModel = require("../Model/goods_Model");
const multer = require("multer"); //图片模块


//获取所有商品信息
router.post("/getAllGoods", (req, res) => {
    let goodsModel = new GoodsModel();
    goodsModel.getAllGoods((result) => {
        
        res.json(result);
    })
})

module.exports = router;
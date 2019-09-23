const express = require('express');
const router = express.Router();
const GoodsModel = require("../Model/goods_Model");
const multer = require("multer"); //图片模块

//获取商品的基本信息，商品店铺信息，商品评论信息
router.post('/getAllInfo', (req, res) => {
    let goodsModel = new GoodsModel();
    goodsModel.getAllInfo(req.body.goodsId, results => {
        res.json(results);
    })
});


module.exports = router;
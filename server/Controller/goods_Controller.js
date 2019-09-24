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


//获取一个商品的信息//
router.post("/getGoods", (req, res) => {
    let goodsModel = new GoodsModel();
    goodsModel.getGoods(req.body.goodsId, (result) => {
        res.json(result);
    })
})
// 本周热卖
router.post("/getbooks", (req, res) => {
    let goodsModel = new GoodsModel();
    goodsModel.getbooks(req.body.gType, (result) => {
        res.json(result);
    })
})


//女装
router.post("/getwomens", (req, res) => {
    let goodsModel = new GoodsModel();
    goodsModel.getwomens(req.body.gType, (result) => {
        res.json(result);
    })
})
//男装
router.post("/getmens", (req, res) => {
    let goodsModel = new GoodsModel();
    goodsModel.getmens(req.body.gType, (result) => {
        res.json(result);
    })
})
//汉元素
router.post("/chineses", (req, res) => {
    let goodsModel = new GoodsModel();
    goodsModel.chineses(req.body.gType, (result) => {
        res.json(result);
    })
})
//周边配饰
router.post("/accessories", (req, res) => {
    let goodsModel = new GoodsModel();
    goodsModel.accessories(req.body.gType, (result) => {
        res.json(result);
    })
})




router.post("/sdbdoods", (req, res) => {
    let goodsModel = new GoodsModel();
    goodsModel.sdbdoods(req.body.goodsId, (result) => {
        res.json(result);
    })
})

module.exports = router;
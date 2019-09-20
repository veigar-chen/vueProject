const express = require('express');
const router = express.Router();
const UserModel = require("../Model/user_Model");
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




//验证用户名是否存在
router.post('/isExist', (req, res) => {
    let userModel = new UserModel();
    userModel.isExist(req.body, (result) => {
        if (result.length > 0) {
            res.json({ code: -1 });
        } else {
            res.json({ code: 1 });
        }
    })
});

router.post('/reg', (req, res) => {
    let userModel = new UserModel();
    userModel.register(req.body, (result) => {
        if (result.affectedRows) {
            res.json({ code: 1, userName: req.body.userName, avatar: req.body.avatar });
        } else {
            res.json({ code: -1 });
        }
    })
});

router.post('/login', (req, res) => {
    let userModel = new UserModel();
    userModel.login(req.body.userName, (result) => {
        let re = "";
        if (!result.length) {
            re = { code: -1 }
        } else
        if (result[0].passWord != req.body.passWord) {
            re = {
                code: 0
            }
        } else {
            re = {
                code: 1,
                userName: result[0].userName,
                avatar: result[0].avatar
            }
        }
        res.json(re);
    })
})


module.exports = router;
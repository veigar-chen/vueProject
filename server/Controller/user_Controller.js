const express = require('express');
const router = express.Router();
const UserModel = require("../Model/user_Model");

//验证用户名是否存在
router.post('/isExist', (req, res) => {
    let userModel = new UserModel();
    userModel.isExist(req.body.userName, (result) => {
        if (result.length > 0) {
            res.json({ code: -1 });
        } else {
            res.json({ code: 1 });
        }
    })
});

router.post('/register', (req, res) => {
    let userModel = new UserModel();
    userModel.register(req.body, (result) => {
        if (result.affectedRows) {
            res.json({ code: 1 });
        } else {
            res.json({ code: -1 });
        }
    })
});

router.post('/login', (req, res) => {
    let userModel = new UserModel();
    userModel.login(req.body.userName, (result) => {
        let re = {
            code: 1
        }
        if (!result.length) {
            re = { code: -1 }
        } else if (result[0].passWord != req.body.passWord) {
            re = {
                code: 0
            }
        }
        res.json(re);
    })
})

module.exports = router;
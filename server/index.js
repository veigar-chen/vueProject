const express = require('express');
const app = express();
const bodyParser = require("body-parser");

//第三方键
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//启用cookie和session
app.use(require("./author/").session);
app.use(require("./author/").cookie);

app.use(require("./tools/cors").cors);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

//启用用户路由
app.use("/user", require("./Controller/user_Controller"));

//启用商户路由
app.use("/shop", require("./Controller/shop_Controller"));

//启用商品路由
app.use("/goods", require("./Controller/goods_Controller"));

app.use("/avatar", express.static('./avatar'));
app.use("/goodsPhoto", express.static('./goodsPhoto'));

app.listen(8888, () => {
    console.log('Example app listening on port 8888!');
});

//Run app, then load http://localhost:8888 in a browser to see the output.
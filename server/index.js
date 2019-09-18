const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(require("./tools/cors").cors);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use("/user", require("./Controller/user_Controller"));

app.listen(8888, () => {
    console.log('Example app listening on port 8888!');
});

//Run app, then load http://localhost:8888 in a browser to see the output.
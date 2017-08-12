var express = require('express');
var router = express.Router();

/* GET home page. */
//总路由

var user = require("./user.js");
var address = require("./address.js");
var banner = require("./banner.js");
var meal = require("./meal.js");
var order = require("./order.js");

//注册路由
user(router);
address(router);
banner(router);
meal(router);
order(router);

module.exports = router;
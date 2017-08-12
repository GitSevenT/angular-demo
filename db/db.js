/**
 * Created by Administrator on 2016/8/12.
 */
/*统一操作数据库的总接口 处理错误异常*/
var user_dao = require("./user_dao.js");
var feedback_dao = require("./feedback_dao.js");
var address_dao = require("./address_dao.js");
var banner_dao = require("./banner_dao.js");
var meal_dao = require("./meal_dao.js");
var order_dao = require("./order_dao.js");
var db = {
    addUser : function (phone, fn) {
        user_dao.addUser(phone, function (err, user) {
            if(err){
                throw err;
            }else{
                fn(user);//通过回调将后台数据传到客户端
            }
        })
    },
    getUser : function (phone, fn) {
        user_dao.getUser(phone, function (err, user) {
            if(err){
                throw err;
            }else{
                fn(user);//通过回调将后台数据传到客户端
            }
        })
    },
    feedBack : function (feedback, fn) {
        feedback_dao.feedBack(feedback, function (err, feedBack) {
            if(err){
                throw err;
            }else{
                fn(feedBack);//通过回调将后台数据传到客户端
            }
        })
    },
    /*增*/
    addAddress : function (address, fn) {
        address_dao.addAddress(address, function (err, address) {
            if(err){
                throw err;
            }else{
                fn(address);//通过回调将后台数据传到客户端
            }
        })
    },
    /*删*/
    delAddress : function (address, fn) {
        address_dao.delAddress(address, function (err, address) {
            if(err){
                throw err;
            }else{
                fn(address);//通过回调将后台数据传到客户端
            }
        })
    },
    /*改*/
    updateAddress : function (address, fn) {
        address_dao.updateAddress(address, function (err, address) {
            if(err){
                throw err;
            }else{
                fn(address);//通过回调将后台数据传到客户端
            }
        })
    },
    /*查所有地址*/
    findAddress : function (address, fn) {
        address_dao.findAddress(address, function (err, address) {
            if(err){
                throw err;
            }else{
                fn(address);//通过回调将后台数据传到客户端
            }
        })
    },
    /*查默认地址*/
    findOneAddress : function (address, fn) {
        address_dao.findOneAddress(address, function (err, address) {
            if(err){
                throw err;
            }else{
                fn(address);//通过回调将后台数据传到客户端
            }
        })
    },
    /*banner*/
    getBanner : function (fn) {
        banner_dao.getBanner(function (err, banner) {
            if(err){
                throw err;
            }else{
                fn(banner);//通过回调将后台数据传到客户端
            }
        })
    },
    /*meal*/
    getMeals : function (fn) {
        meal_dao.getMeals(function (err, meals) {
            if(err){
                throw err;
            }else{
                fn(meals);//通过回调将后台数据传到客户端
            }
        })
    },
    /*addOrder*/
    addOrder : function (fn) {
        order_dao.addOrder(function (err, order) {
            if(err){
                throw err;
            }else{
                fn(order);//通过回调将后台数据传到客户端
            }
        })
    },
    /*getOneOrder*/
    getOneOrder : function (id, fn) {
        order_dao.getOneOrder(id, function (err, order) {
            if(err){
                throw err;
            }else{
                fn(order);//通过回调将后台数据传到客户端
            }
        })
    },
    /*getOrders*/
    getOrders : function (userId, fn) {
        order_dao.getOrders(userId, function (err, orders) {
            if(err){
                throw err;
            }else{
                fn(orders);//通过回调将后台数据传到客户端
            }
        })
    }


};

module.exports = db;
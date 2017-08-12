/**
 * Created by Administrator on 2016/8/15.
 */
var con = require("./connection.js");
var mongoose = con.mongoose;
/*Schema*/
var orderSchema = new mongoose.Schema({
    "contactor": String,
    "address": String,
    "phone": String,
    "rstName": String,
    "remark": String,
    "doorplate": String,
    "total_money": Number,
    "peisongfei": Number,
    "state": Number,
    "arrive_time": Date,
    "detail": String,
    "user_id": String,
    "coupon_id": String
});
/*model*/
var orderModel = mongoose.model("order",orderSchema);


/*添加订单*/
exports.addOrder = function (order, cb) {
    new orderModel(order).save(cb);
};
/*查找用户订单*/
exports.getOneOrder = function (id, cb) {
    orderModel.findOne({_id:id},cb)
};
/*查找所有订单*/
exports.getOrders = function (userId, cb) {
    orderModel.find({user_Id:userId},cb);
};


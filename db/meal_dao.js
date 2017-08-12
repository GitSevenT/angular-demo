/**
 * Created by Administrator on 2016/8/15.
 */
var con = require("./connection.js");
var mongoose = con.mongoose;
/*Schema*/
var mealSchema = new mongoose.Schema({
    "group_id": Number,
    "groupName": String,
    "mealCode": String,
    "mealType": Number,
    "mealName": String,
    "price": Number,
    "originalPrice": Number,
    "picture": String,
    "instruction": String,
    "sales": Number,
    "state": String
});
/*model*/
var mealModel = mongoose.model("meals",mealSchema);

exports.getMeals = function (cb) {
    mealModel.find(cb);
};
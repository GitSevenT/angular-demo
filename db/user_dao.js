/**
 * Created by Administrator on 2016/8/12.
 */
/*data access obj 数据访问对象*/
var connection = require("./connection.js");
//引入mongoose对象
var mon = connection.mongoose;
/*得到mongoose对象的Schema类*/
var Schema = mon.Schema;
/*创建Schema的实例*/
var UserSchema = new Schema({
   phone : String
});
/*得到mongoose对象的model类*/
var UserModel = mon.model("user",UserSchema);//指定表名及Schema类型

/*测试*/
//connection.connect();
// function cb(err, result) {
// console.log('err='+err+" result="+result);
//}

/*暴露一个方法，存储用户信息*/
/*除了save操作，其他均可通过model类来操作数据库*/

  var addUser = function (user, cb) {
    new UserModel({phone:user}).save(cb);//通过客户端获取用户信息，并保存到数据库
    //console.log(user);
};
exports.addUser = addUser;
//addUser({phone:"12121311111"},cb);
/*暴露一个方法，获取用户信息*/
exports.getUser = function (userPhone,cb) {
    UserModel.findOne({phone:userPhone},cb)
};

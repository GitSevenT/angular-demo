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
//{
//    "_id": {
//    "$oid": "57624634edb35fb81e258e34"
//},
//    "user_id": "57623dd0a20d4fc41cb26d53",
//    "phone": "15611111111",
//    "content": "have a good day",
//    "create_time": {
//    "$date": "2016-06-16T14:24:52.070+0800"
//}
//}

var addressSchema = new Schema({
    "userId": String,
    "lat": String,
    "lng": String,
    "cityId": String,
    "contactor": String,
    "sex": Number,
    "phone": String,
    "address": String,
    "doorplate": String,
    "state": Number
});
/*得到mongoose对象的model类*/
var AddressModel = mon.model("address",addressSchema);//指定表名及Schema类型

/*测试*/
//connection.connect();
// function cb(err, result) {
// console.log('err='+err+" result="+result);
//}

/*增*/
var addAddress = function (address,cb) {
    new AddressModel(address).save(cb)
};
exports.addAddress = addAddress;

/*删*//*根据用户地址_id删掉其中一个地址*/
var delAddress = function (id,cb) {
    AddressModel.remove({_id:id},cb)
};
exports.delAddress = delAddress;

/*改*//*根据用户新地址_id更改某一个地址*/
var updateAddress = function (address,cb) {
    console.log(address._id+'--------------------++++++++++++++++++++++++++++++++++++')
    AddressModel.update({_id:address._id},address,cb)
};
exports.updateAddress = updateAddress;

/*查*//*根据用户userId查找所有地址*/
var findAddress = function (userId,cb) {
    AddressModel.find({userId:userId},cb)
};
exports.findAddress = findAddress;
/*查*//*根据用户userId查找默认地址*/
var findOneAddress = function (userId,cb) {
    AddressModel.findOne({userId:userId},cb)
};
exports.findOneAddress = findOneAddress;

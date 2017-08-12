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

var feedBackModel = new Schema({
    "user_id" : String,
    "phone" : String,
    "content" : String,
    "create_time" : {
        type : Date,
        default : Date.now()
    }
});
/*得到mongoose对象的model类*/
var FeedBackModel = mon.model("feedback",feedBackModel);//指定表名及Schema类型

/*测试*/
//connection.connect();
// function cb(err, result) {
// console.log('err='+err+" result="+result);
//}


var feedBack = function (feedback,cb) {
    new FeedBackModel(feedback).save(cb)
};
exports.feedBack = feedBack;
//feedBack(
//        {//{"_id":"57ade2a3722eb9381a553d3c","phone":"12121212121","__v":0}
//        "user_id": "57ade2a3722eb9381a553d3c",
//        "phone": "12121212121",
//        "content": "have a good day"
//
//    },cb
//);
/**
 * Created by Administrator on 2016/8/12.
 */
/*建立数据库连接及断开*/
var mongoose = require("mongoose");
/*暴露mongoose对象*/
exports.mongoose = mongoose ;
/*暴露数据库连接*/
var connect  = function () {
    mongoose.connect("mongodb://127.0.0.1/atguigu_o2o");//建立数据库连接
    /*得到连接对象*/
    var con = mongoose.connection;
    con.on("open",function () {
        console.log("open connection");
    });
    con.on("close",function () {
        console.log("close connection");
    });
    con.on("error",function () {
        console.log("error connection");
    })

};
exports.connect = connect;

/*暴露数据库关闭*/
var disconnect = function () {
    mongoose.disconnect();
    console.log("close connection");
};
exports.disconnect = disconnect;
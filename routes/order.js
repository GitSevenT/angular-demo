/**
 * Created by Administrator on 2016/8/15.
 */
/*订单分路由*/
var db = require("../db/db.js");
module.exports = function (router) {

   router.get("/order/getNewestAddress",function (req, res, next) {
       var userId = req.query.userId;
       console.log("id888888888:"+userId);
       db.findOneAddress(userId,function (order) {
           if(order==null){
               console.log("11111111111");
               res.send({
                   "code": 1
               });
           }else{
               console.log("00000000000");
               res.send({
                   "code": 0,
                   "data": order
               });
           }

       })
   })
};
/**
 * Created by Administrator on 2016/8/15.
 */
/*主页显示分路由*/
var db = require("../db/db.js");
module.exports = function (router) {
   router.get("/index/banners",function (req, res, next) {
          db.getBanner(function (banner) {
              res.send({
                  "code" : 0,
                  "data" : banner
              });
              console.log(banner);
          })
       })
};
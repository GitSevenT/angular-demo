
/*分路由*/
var db = require("../db/db.js");//依赖数据库操作总接口

module.exports = function (router) {
    router.post("/login",function (req, res, next) {
        //从客户端获取用户信息
        var phone = req.body.phone;
        var code = req.body.code;
        console.log("------------"+phone);
        //通过服务器从数据库查找用户
        db.getUser(phone, function (user) {
            if(user==null){//从数据库返回的用户信息
                db.addUser(phone, function(user){
                    res.send({
                        code : 0,
                        data : user
                    })
                });
            }else{
                res.send({
                    code : 0,
                    data : user
                })
            }
        });
    });
    router.get("/feedback",function (req, res, next) {
        //从客户端获取用户信息
        var feedback = req.query.data;
        feedback = JSON.parse(feedback);
        //通过服务器从数据库查找用户
        console.log(feedback);
        db.feedBack(feedback, function(feedBack){
            res.send({
                code : 0,
                data : feedBack
            })
        });

    })
};

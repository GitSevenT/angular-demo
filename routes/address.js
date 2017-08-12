var db = require("../db/db.js");
module.exports = function (router) {
    router.get("/insertAddr",function (req, res, next) {
        var addr = req.query.address;
        console.log(addr);
        addr = JSON.parse(addr);
        db.addAddress(addr,function (address) {
            res.send({
                code : 0,
                data :address
            });
            console.log("添加insert数据"+address);
        });
    });
    router.get("/getAddrsByUserId",function (req, res, next) {
        var userId = req.query.userId;
        db.findAddress(userId,function (address) {
            res.send({
                code : 0,
                data :address
            });
            console.log("查找find的数据"+address);
        });
    });
    router.get("/updateAddr",function (req, res, next) {
        var address = req.query.address;
        address = JSON.parse(address);
        console.log("updateAddr更改后"+address);
        db.updateAddress(address,function (address) {
            res.send({
                code : 0,
                data :address
            });
            //console.log("后台返回到客户端的数据"+address);
        });
    });
    router.get("/deleteAddr",function (req, res, next) {
        var id = req.query.id;
        //id = JSON.parse(id);
        console.log("根据_id删除"+id);
        db.delAddress(id,function (address) {
            res.send({
                code : 0,
                data :address
            });
            //console.log("后台返回到客户端的数据"+address);
        });
    });

};

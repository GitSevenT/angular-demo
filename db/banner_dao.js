/**
 * Created by Administrator on 2016/8/15.
 */
var con = require("./connection.js");
var mongoose = con.mongoose;
/*Schema*/
var bannerSchema = new mongoose.Schema({
    "img_src": String,
    "link": String,
    "sort": Boolean
});
/*model*/
var bannerModel = mongoose.model("index_banner",bannerSchema);

exports.getBanner = function (cb) {
    bannerModel.find(cb);
};

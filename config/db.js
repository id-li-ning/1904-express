//链接MongoDB


//引入 Mongoose
const mongoose = require("mongoose");

//定义链接地址
 const url = "mongodb://localhost:27017/express";

 // 链接
 mongoose
    .connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        console.log("数据库链接成功");
        
    })
    .catch(error => {
        console.log("数据库链接失败");
        console.log(error);
        
    });

//暴露
module.exports = mongoose;
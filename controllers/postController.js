//帖子的控制器，暴露一系列中间件方法给到帖子的路由去使用、

//引入 PostModel
const PostModel = require("../models/postModel")
/**
 * 获取帖子列表
 */

 exports.index = async (req,res)=>{
     //Model.find()
        const data = await PostModel.find();
        res.send({code:0,msg:"成功",data:data});
 };

/**
 * 创建帖子
 */
exports.create = async (req,res)=>{
    //获取前端传过来的参数
    const {title,content} = req.body;
    //Model.create()来创建数据
    // PostModel.create({
    //     //当命名和赋值的名字一样时可以简写
    //     title,
    //     content
    // })
    // .then(()=>{
    //     //成功
    //     res.send({
    //         code:0,
    //         msg:"成功"
    //     });
    // })
    // .catch(error =>{
    //     //失败
    //     console.log(error);
    //     res.send({
    //         code:-1,
    //         msg:"失败"
    //     });
    // });
        await PostModel.create({title,content});
        res.send({code:0,msg:"成功"});
};

/**
 * 更新帖子
 */
exports.update = async (req,res)=>{
   //要跟新帖子的ID
   const {id} = req.params;

   //更新的内容 req.body
       await PostModel.updateOne({_id: id},req.body);
       res.send({code:0,msg:"成功"});
};

/**
 * 删除帖子
 */
exports.remove = async (req,res)=>{
 //获取ID
 const { id } =  req.params;

 //Model.deleteOne()
   await PostModel.deleteOne({_id : id});
   res.send({code:0,msg:"成功"});
};
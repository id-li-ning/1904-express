//post路由文件
//引入express
const express = require('express');
//引入postController
const {
    index,
    create,
    update,
    remove
} = require("../controllers/postController");


//生成 express.Router实例
const router = express.Router();

//定义帖子相关的路由
/**
 * @api {get} /post 获取帖子列表
 * @apiName index
 * @apiGroup post
 * 
 *
 * @apiSuccess {Number} code 错误状态码.
 * @apiSuccess {String} msg  错误消息.
 * @apiSuccess {Array} data  帖子数组.
 */
router.get('/',index);
/**
 * @api {get} /post 获取帖子列表
 * @apiName index
 * @apiGroup post
 * @apiParam {String} title  帖子标题.
 *@apiParam {Stting} content  帖子内容.
 * @apiSuccess {Number} code 错误状态码.
 * @apiSuccess {String} msg  错误消息.
 */
router.post("/",create);
//PUT / posts/:id
router.put('/:id',update);
//DELETE /posts/:id
router.delete("/:id",remove);

//暴露router 的实例
module.exports = router;


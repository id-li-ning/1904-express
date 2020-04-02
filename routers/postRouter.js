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
//GET /posts
router.get('/',index);
//POST /posts
router.post("/",create);
//PUT / posts/:id
router.put('/:id',update);
//DELETE /posts/:id
router.delete("/:id",remove);

//暴露router 的实例
module.exports = router;


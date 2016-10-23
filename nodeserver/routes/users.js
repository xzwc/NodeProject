var express = require('express');
var router = express.Router();


/* 用户登录. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET请求数据. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/* Post请求. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;


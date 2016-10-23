var express = require('express');
var router = express.Router();
var Activitiy = require('../models/activity');


router.route('/getActivities').get(function (req, res) {
  Activitiy.find(function (err, activities) {
    if (err) {
      res.json({ "message": "获取活动列表失败", "status_code": 40016, "result": err });
    }
    res.json({ "message": "获取活动列表成功", "status_code": 200, "result": activities });

  });
});

module.exports = router;

//添加数据的脚本
var db = require('../db');
var moongoose = require('mongoose');
var configs = require('../config/config');
var MongoClient = require('mongodb').MongoClient;
var url = configs.db;
var assert = require('assert');


MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");
    console.log("start table operation");

    var activitySchema = new moongoose.Schema({
        activityId: Number,
        activityName: String,
        activityTime: String,
        activityPlace: String
    })

    var Activity = moongoose.model('Activity', activitySchema);
    var activity1 = new Activity({
        activityId: 1,
        activityName: '活动1',
        activityTime: '2小时',
        activityPlace: '会议室1'
    });

    var activity2 = new Activity({
        activityId: 2,
        activityName: '活动2',
        activityTime: '2小时',
        activityPlace: '会议室2'
    });


    activity1.save(
        function (err) {
            if (err) {
                console.log('保存活动失败');
                return;
            }
            console.log('保存成功');
        });

    activity2.save(
        function (err) {
            if (err) {
                console.log('保存活动失败');
                return;
            }
            console.log('保存成功');
        });
});
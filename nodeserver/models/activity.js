//活动的数据模型
var moongoose = require('mongoose');
var db = require('../db');
var autoIncrement = db.autoIncrement;
var connection = db.connection;

var activitySchema = new moongoose.Schema({
    activityId: Number,
    activityName: String,
    activityTime: String,
    activityPlace: String,
})

activitySchema.plugin(autoIncrement.plugin, {
    model: 'activity',
    field: 'activityId',
    startAt: 10000
});

module.exports = connection.model('activity',activitySchema);
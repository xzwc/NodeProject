//数据库连接
var mongoose = require('mongoose');
var autoIncrement =  require('mongoose-auto-increment');
var configs = require('./config/config');

var connection = mongoose.connect(configs.db);
autoIncrement.initialize(connection);

exports.autoIncrement = autoIncrement;
exports.connection = connection;

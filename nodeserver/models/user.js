var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;
var MongooseDao = require('mongoosedao');

var userSchema = new Schema(
    {
      "name":"String",
      "password":"String"
    }
);

var User = mongoose.model('User', userSchema);
var UserDao = new MongooseDao(User);

module.exports = UserDao;
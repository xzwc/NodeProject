var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var users = require('./routes/users');
var session = require('express-session');  
var MongoClient = require('mongodb').MongoClient;  
var ObjectID = require('mongodb').ObjectID;  
var assert = require('assert');

var autoIncrement = require('mongoose-auto-increment');
var configs = require('./config/config');


var app = express();

var getActivities = require('./routes/getActivities');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/api', routes);
// app.use('/api/users', users);
// app.use('/api/login', login);  //登录
app.use('/api', require('./routes/getActivities'));  //获取全部的活动信息
// app.use('/api/postActivities/:id', postActivities); //修改某条活动的信息


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


//session
app.use(session({
  secret: 'keyboard cat',
  saveUninitialized: true,
  resave: true
}));

// var url = 'mongodb://localhost:27017/test';
// var url = configs.db ;
// MongoClient.connect(url, function (err, db) {
//   assert.equal(null, err);
//   console.log("Connected correctly to server");

//   //创建集合
//   app.users = db.collection('users');

//   // db.ensureIndex('users', 'email', function (err) {
//   //   if (err) throw err;
//   //   db.ensureIndex('users', 'password', function (err) {
//   //     if (err) throw err;
//   //     console.log('ensureIndex');

//       //监听端口
//       app.listen(3001, function () {
//         console.log('listen 3000');
//     //   });
//     // });
//   });

// });


// //注册一个公共中间件
// app.use(function (req,res,next) {  
//     console.info(req.session.loginedIn);
//    if (req.session.loginedIn){
//        res.locals.authenticated = true;
//        app.users.find(ObjectID.createFromHexString(req.session.loginedIn)).toArray(function (err,result) {
//            console.info(result);
//            if (err)return next(err);
//            res.locals.me = result[0];
//            next();
//        })
//    }else{
//        res.locals.authenticated = false;
//        next();
//    }
// });

// //route
// app.get('/', function (req,res) {  
//     res.render('index');
// });


// app.get('/login/:signupEmail', function (req,res) {  
//    res.render('login',{signupEmail:req.params.signupEmail});
// });

// app.get('/login', function (req,res) {  
//     res.render('login');
// });
// ///get sign up视图
// app.get('/signup',function (req,res) {  
//     res.render('signup');
// });



// //post sign up 注册
// app.post('/signup', function (req,res) {  
//     console.info(req.body);
//    app.users.insertOne(req.body, function (err,result) {
//        if (err)return next(err);
//        console.info(result.ops[0].email);
//        res.redirect('/login/'+result.ops[0].email);
//    })
// });

// app.post('/login', function (req,res) {  
//     app.users.find({email:req.body.user.email,password:req.body.user.password}).toArray(function (err,result) {
//         if (err) return next(err);
//         if (!result) return res.send(`<p>user not found, go back try again`);
//         req.session.loginedIn = result[0]._id.toString();
//         res.redirect('  /');
//     })
// });

// app.get('/logout', function (req,res) {  
//     req.session.loginedIn = null;
//     res.redirect('/');
// });
module.exports = app;

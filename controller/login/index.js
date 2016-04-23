/**
 * /login下 路由配置
 * Created by dell on 2016/4/23.
 */
'use strict';
//var http = require('http'),
//    async = require('async');

module.exports = function (router) {
      router.get('/', function (req, res, next) {
          var db = req.db,
              collection = db.get('usercollection');
          collection.find({},{}, function (e, docs) {
              res.render('login/login',{
                  title: '登录',
                  username:'sqliang',
                  psw:'19891111',
                  userList: docs
              });
          });
      });

    // 接受post请求，request参数有username，email,然后插入到mongodb数据库
    router.post('/adduser',function(req,res,next){
        var db = req.db;
        var collection = db.get('usercollection');

        var username = req.body.username;
        var email = req.body.email;

        collection.insert({
            "username": username,
            "email": email
        },function(err,doc){
            if(err){
                res.send('here was a problem adding the information to the database.');
            }else{
                //res.send('success');
                /*res.location('login');
                 res.redirect('login');*/
                res.json({success:1});//返回json数据
            }
        });

    });
    // /user 接受PUT请求
    router.put('/putreq',function(req,res,next){
        res.json({soccess:1,hehe:'woca'});
    });

};


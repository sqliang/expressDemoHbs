/**
 * /newsletter下路由配置
 * Created by dell on 2016/4/23.
 */
'user strict';
var http = require('http');
var async = require("async");

module.exports = function (router) {
    // /newsletter
    router.get('/', function (req, res) {
        res.render('newsletter/index',{
            csrf: 'CSRF token goes here'
        });
    });
    // /newsletter/process
    router.post('/process', function (req, res) {
        console.log('===================>>>begin');
        console.log('get参数：' + req.query.form);
        console.log('req.body',req.body);
        console.log('<<<===================end');
        res.redirect(303,'/newsletter/success');
    });
    // /newsletter/success
    router.get('/success',function(req,res){
        res.send('success');
    });
};
/**
 * contest下 路由配置
 * 符合表单提交，文件上传
 * Created by dell on 2016/4/23.
 */
'use strict';
var http = require('http');
var async = require('async');
var formidable = require('formidable');

module.exports = function (router) {
    router.get('/vacation-photo', function (req, res) {
        var now = new Date();
        res.render('contest/vacation-photo',{
            year: now.getFullYear(),
            month: now.getMonth()
        });
    });
    router.post('/vacation-photo/:year/:month', function (req, res) {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            if(err){
                return res.redirect(303,'/error');
            }else{
                console.log('<<<======================>>>');
                console.log('received fields:');
                console.log(fields);
                console.log('received files:');
                console.log(files);
                res.send('success');
            }
        });
    });
};

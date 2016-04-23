/**
 * /index下 路由配置
 * Created by dell on 2016/4/23.
 */
'use strict';
var http = require('http');
var async = require('async');

module.exports = function (router) {
    router.get('/', function (req, res, next) {
        res.render('index/index',{
            title:'index主页',
            name: 'Hello'
        });
    });
};
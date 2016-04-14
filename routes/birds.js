/**
 * Created by dell on 2016/4/15.
 */
var express = require('express');
var router = express.Router();

router.get('/houzi',function(req,res){
    res.send('/birds/houzi');
});


module.exports = router;
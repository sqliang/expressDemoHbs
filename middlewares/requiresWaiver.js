/**
 * Created by dell on 2016/4/24.
 */
'use strict';
module.exports = {
    checkWaivers: function(rq,res,next){
        var cart = req.session.cart;
        if(!cart){
            return next();
        }else if(cart.some(function(i){return i.product.requiresWaiver;})){
            if(!cart.warnings) cart.warnings = [];
            cart.warnings.push('One or more of your selected tours requires a waiver');
        }
        next();
    },
    checkGuestCount : function(req,res,next){
        var cart = req.session.cart;
        if(!cart) return next();
        if(cart.some(function(item){return item.guest > item.product.maximumGuests;})){
            if(!cart.errors) cart.errors = [];
            cart.errors.push('One or more of your selected tours' +
                        'cannot accommodate the number of guests you' +
                        'have selected');
        }
        next();
    }
};
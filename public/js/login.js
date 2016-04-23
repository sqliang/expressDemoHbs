/**
 * Created by dell on 2016/4/10.
 */
$(function(){
    $('#j-addUser').on('click',function(event){
        var data = {
            username: $('#user').val(),
            email:$('#email').val()
        };
        $.ajax({
            url:'/login/adduser',
            type: 'POST',
            data: data,
            success: function(data){
                console.log(data.success);

            },
            error: function(){
                alert('error');
            }
        });
    });
    $('#j-putreq').on('click',function(event){
        var data = {
            username:$('.user').val(),
            email: $('.email').val()
        };
        $.ajax({
            url: '/login/putreq',
            type: 'PUT',
            data: data,
            success:function(data){
                console.log(data);
            },
            error: function(data){
                console.log(data);
            }
        });
    });
});
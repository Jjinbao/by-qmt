$('.header-logo').on('click',function(e){
    window.location.href='./index.html'
})
var clickEnterBtn=function(e){
    if(e.keyCode == '13'){
        alert('ok');
    }
}

$('#search_name').focus(function(){
    $(document).bind('keyup',clickEnterBtn);
});

$('#search_name').blur(function(){
    $(document).unbind('keyup',clickEnterBtn);
});

//监听滚动条事件

$(document).scroll(function() {
    var top=$(document).scrollTop();
    if(top>100){
        $('.to-top').css('display','block');
    }else{
        $('.to-top').css('display','none');
    }
});

$('.to-top').on('click',function(){
    $('html,body').animate({scrollTop:0},'fast');
})
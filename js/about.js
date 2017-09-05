
var initLeftMenu=function(){
    $('#plat').attr('class','a-menu');
    $('#ymy').attr('class','a-menu');
    $('#question').attr('class','a-menu');
    $('#study').attr('class','a-menu');

    $('.platform').css('display','none');
    $('.about-ymy').css('display','none');
    $('.common-questions').css('display','none');
    $('.appoint-study').css('display','none');
}
$('#plat').on('click',function(e){
    if($('#plat').hasClass('a-menu-active')){
        return;
    }else{
        initLeftMenu();
        $('#plat').addClass('a-menu-active');
        $('.platform').css('display','block');
    }
});
$('#ymy').on('click',function(e){
    if($('#ymy').hasClass('a-menu-active')){
        return;
    }else{
        initLeftMenu();
        $('#ymy').addClass('a-menu-active');
        $('.about-ymy').css('display','block');
    }
})
$('#question').on('click',function(e){
    if($('#question').hasClass('a-menu-active')){
        return;
    }else{
        initLeftMenu();
        $('#question').addClass('a-menu-active');
        $('.common-questions').css('display','block');
    }
})
$('#study').on('click',function(e){
    if($('#study').hasClass('a-menu-active')){
        return;
    }else{
        initLeftMenu();
        $('#study').addClass('a-menu-active');
        $('.appoint-study').css('display','block');
    }
})
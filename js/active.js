$(document).ready(function(){
    $('#myCarousel').carousel({interval:5000});//每隔5秒自动轮播

    //搜索事件
    var clickEnterBtn=function(e){
        if(!$('#search_name').val()){
            return;
        }
        if(e.keyCode == '13'){
            //$('#search_name').blur();
            console.log('123');
            window.location.href='#';
        }
    }

    $('#search_name').focus(function(){
        $(document).bind('keyup',clickEnterBtn);
    });

    $('#search_name').blur(function(){
        $(document).unbind('keyup',clickEnterBtn);
    });
});


try{
    $('#Pagination').pagination({
        pageCount: 8,
        items_per_page:5,
        jump: true,
        callback:function(api){
            console.log('1234')
        }
    });
} catch (e){
    console.log('这里没有分页');
}


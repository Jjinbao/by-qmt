$(document).ready(function(e){
    //搜索事件
    var clickEnterBtn=function(e){
        if(!$('#search_name').val()){
            return;
        }
        if(e.keyCode == '13'){
            //$('#search_name').blur();
            window.location.href='./invest-search.html';
        }
    }

    $('#search_name').focus(function(){
        $(document).bind('keyup',clickEnterBtn);
    });

    $('#search_name').blur(function(){
        $(document).unbind('keyup',clickEnterBtn);
    });


    try{
        $('#Pagination').pagination({
            pageCount: 8,
            items_per_page:5,
            jump: true,
            callback:function(api){

            }
        });
    }catch (e){

    }

})


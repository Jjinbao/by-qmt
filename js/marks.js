/*轮播图自动播放*/
$(document).ready(function(){
    $('#address').on('click',function(e){

    })
    $('#myCarousel').carousel({interval:5000});//每隔5秒自动轮播

    $('.change').on('click',function(e){
        window.location.href='./templates/marks/detail.html'
    })

    $('.minus').click(function(e){
        if($('#buy_num').val()>0){
            $('#buy_num').attr('value',parseInt($('#buy_num').val())-1);
        }else{
            return;
        }
    })

    $('.plus').click(function(e){
        $('#buy_num').attr('value',parseInt($('#buy_num').val())+1);
    })
})

$('#Pagination').pagination({
    pageCount: 8,
    items_per_page:5,
    jump: true,
    callback:function(api){
        console.log('1234')
    }
});

/*轮播图自动播放*/
$(document).ready(function(){
    $('#address').on('click',function(e){

    })
    $('#myCarousel').carousel({interval:5000});//每隔5秒自动轮播
})

$('#Pagination').pagination({
    pageCount: 8,
    items_per_page:5,
    jump: true,
    callback:function(api){
        console.log('1234')
    }
});

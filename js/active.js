$(document).ready(function(){
    $('#myCarousel').carousel({interval:5000});//每隔5秒自动轮播
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
}


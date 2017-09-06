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

    //点击缩略图，替换展示的图片
    $('.imgpar').click(function(e){
        console.log(e.target.src);
        $('#bigImg').attr('src',e.target.src);
    })
})

try{
    $('#Pagination').pagination({
        pageCount: 8,
        items_per_page:5,
        jump: true,
        callback:function(api){
            console.log('1234')
        }
    });
}catch (e){

}

jQuery(function($){
    'use strict';
    (function () {
        var $frame = $('#cyclepages');
        var $wrap  = $frame.parent();

        // Call Sly on frame
        $frame.sly({
            horizontal: 1,
            itemNav: 'basic',
            smart: 1,
            activateOn: 'click',
            mouseDragging: 1,
            touchDragging: 1,
            releaseSwing: 1,
            startAt: 0,
            scrollBar: $wrap.find('.scrollbar'),
            scrollBy: 1,
            pagesBar: $wrap.find('.pages'),
            activatePageOn: 'click',
            speed: 100,
            elasticBounds: 1,
            easing: 'easeOutExpo',
            dragHandle: 1,
            dynamicHandle: 1,
            clickBar: 1,

            // Cycling
            cycleBy: 'pages',
            cycleInterval: 1000,
            pauseOnHover: 1,
            startPaused: 1,

            // Buttons
            prevPage: $wrap.find('.prevPage'),
            nextPage: $wrap.find('.nextPage')
        });
    }());
});



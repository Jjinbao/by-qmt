$('.header-logo').on('click',function(e){
    window.location.href='./index.html'
})


$('#Pagination').pagination({
    pageCount: 1,
    jump: true,
    callback:function(api){
        console.log('1234')
    }
});
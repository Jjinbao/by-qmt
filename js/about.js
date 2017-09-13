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

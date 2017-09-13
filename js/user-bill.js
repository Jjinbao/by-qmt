$(document).ready(function(){
    try{
        $('#Pagination').pagination({
            pageCount: 4,
            items_per_page:5,
            jump: true,
            callback:function(api){

            }
        });
    }catch (e){

    }
})


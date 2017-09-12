$('#body').css('height',$(window).height()-340);
if($(window).height()>768){
    $('.login-panel').css('margin-top',($(window).height()-690)/2);
}else{
    $('.login-panel').css('margin-top','px');
}
window.onresize=function(){
    $('#body').css('height',$(window).height()-340);
    if($(window).height()>768){
        $('.login-panel').css('margin-top',($(window).height()-690)/2);
    }

}
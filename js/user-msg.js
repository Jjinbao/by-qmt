// $(document).on('opening', '.remodal', function () {
//     console.log('opening');
// });
//
// $(document).on('opened', '.remodal', function () {
//     console.log('opened');
// });
//
// $(document).on('closing', '.remodal', function (e) {
//     console.log('closing' + (e.reason ? ', reason: ' + e.reason : ''));
// });
//
// $(document).on('closed', '.remodal', function (e) {
//     console.log('closed' + (e.reason ? ', reason: ' + e.reason : ''));
// });
//
// $(document).on('confirmation', '.remodal', function () {
//     console.log('confirmation');
// });
//
// $(document).on('cancellation', '.remodal', function () {
//     console.log('cancellation');
// });
//模态框初始化
var inst = $('[data-remodal-id=modal1]').remodal();

$('#loginWord').click(function(e){
    inst.open();
})

$('.unbind').on('click',function(e){
    console.log(e.target.parentNode.parentNode);
    inst.open();
})

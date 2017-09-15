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
var inst1 = $('[data-remodal-id=modal1]').remodal();
//解绑银行卡
var inst2 = $('[data-remodal-id=modal2]').remodal();

$('#loginWord').click(function(e){
    inst.open();
})

$('.unbind').on('click',function(e){
    inst2.open();
})

$('#m-payword').on('click',function(e){
    inst1.open();
})

$('.cancle-unbind').on('click',function(e){
    inst2.close();
})

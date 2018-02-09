/**
 * Created by lizhenhua on 17/6/24.
 */
$(function () {
    $('#getCount').keyup(function () {
        if(/^[1-9]\d*$/.test($(this).val())){
            $('#next').addClass('on')
        }else {
            $('#next').removeClass('on');
        }
    });
    $('#btnNo').click(function () {
        $("#dialog").hide();
    })
    $('#btnYes').click(function () {
        console.log("申请成功!")
    })
    $("#next").click(function () {
        if($(this).hasClass("on")){
            $('#dialog').show();
        }
    });

})



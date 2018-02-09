/**
 * Created by lizhenhua on 17/6/25.
 */
$(function () {
    $('#money').on('keyup',function () {
        var value =$(this).val()
        if(/^[1-9]\d*$/.test(value)){
            $("#next").addClass('on').attr("value",value)
        }else {
            $("#next").removeClass('on').attr("value",'')
        }
    })
})
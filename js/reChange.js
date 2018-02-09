/**
 * Created by lizhenhua on 17/6/25.
 */
$(function () {
    // 选项卡
    $('#tadTop li').click(function () {
        var type= $(this).attr('type'),index = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('.item').eq(index).show().siblings().hide();
        $('#pain').attr('type',type);
    });

    // 选择币 相关操作
    $('.item li').click(function () {
        $(this).addClass('on').siblings().removeClass('on');
        var index=$(this).index(),value=$(this).attr('value');
        if(index<2){
            controlPain(value);
            $('#other').val('');
        }
    });
    $('#other').on('keyup focus',function () {
        var value = $(this).val();
        controlPain(value)
    });

    // 选择劵 相关操作
    $("#rollNumber").on('keyup focus',function () {
        var value = $(this).val();
        roll_controlPain(value,'number')
    });
    $("#rollPassword").on('keyup focus',function () {
        var value = $(this).val();
        roll_controlPain(value,'password')
    });

    //操作充值按钮 value
    function controlPain(value) {
        if(	/^[1-9]\d*$/.test(value)){
            value = (parseInt(value)*0.95).toFixed(0);
            $('#pain').addClass('on').attr('value',value);
            $('#discount').text(value)
        }else {
            $('#pain').removeClass('on').attr('value','');
            $('#discount').text(0)
        }
    }

    //操作充值按钮 number和password
    function roll_controlPain(value,type) {
        var value2 = $("#rollNumber").val();
        var value3 = $("#rollPassword").val();
        if(/^[1-9]\d*$/.test(value2)&&/^[1-9]\d*$/.test(value3)){
            $('#pain').addClass('on').attr(type,value);
        }else {
            $('#pain').removeClass('on').attr(type,'');
        }
    }


    //点击 立即充值 按钮
    $("#pain").click(function () {
        if(!$(this).hasClass('on')){
            return;
        }
        var value = $(this).attr('value');
        var number = $(this).attr('number');
        var password = $(this).attr('password');
        var type = $(this).attr('type');
        if(type =="coin"&&value){
            go(type,value)
        }else {
            if(number&&password){
                go(type,number,password);
            }else {
                $(this).removeClass('on')
                console.log('账户密码错误!')
            }
        }
    })

    function go() {
        for(var i=0;i<arguments.length;i++){
            console.log(arguments[i])
        }
    }

})
/**
 * Created by lizhenhua on 17/6/24.
 */
(function(doc, win){
    var docE1 = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function(){
            var clientWidth = docE1.clientWidth;
            if(!clientWidth) return;
            docE1.style.fontSize = 100 * (clientWidth / 375) + 'px';
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt,recalc,false);
    doc.addEventListener('DOMContentLoaded',recalc,false);
})(document,window);


$(function () {
    var pre = '';
    $("input[type='text']").focus(function () {
        pre = $(this).attr('placeholder');
        $(this).attr('placeholder','');
        var id = $(this).attr('id');
        if(id=='rollNumber'||id=="rollPassword"){
            $("#rollNumber").attr('placeholder','');
            $("#rollPassword").attr('placeholder','');
        }
    })
    $("input[type='text']").blur(function () {
        $(this).attr('placeholder',pre);
        var id = $(this).attr('id');
        if(id=='rollNumber'||id=="rollPassword"){
            $("#rollNumber").attr('placeholder',pre);
            $("#rollPassword").attr('placeholder',pre);
        }
    })
})
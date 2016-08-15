/**
 * Created by Administrator on 2016/8/10.
 */

window.onscroll= function () {
    var Top=document.body.scrollTop;
    console.log(Top);
    if(Top<390){
        $(".slide_nav").hide();
    }else{
        $(".slide_nav").show();
    }
}